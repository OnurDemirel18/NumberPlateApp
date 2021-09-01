import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPlates } from "../services/plates";
import { Row, Col, Button, Form, FormControl } from "react-bootstrap";
import PlateForm from "./PlateForm";
import './platelist.css';
import dateFormat from 'dateformat';



export default () => {
    const dispatch = useDispatch();
    const plates = useSelector(state => state.platesReducer.plates);

    useEffect(() => {
        GetPlates(dispatch);
        
    }, []);

    useEffect(() => {
        setState(plates)
    }, [plates])

    const [state, setState] = useState(plates);
        
    const onChangeAranacakPlaka = (e) => {
        
        var text = e.target.value;
        console.log(plates);
        const filtered = plates.filter(state => state.nPlate.includes(text.toUpperCase()));
        setState(filtered);
        console.log(filtered);

    }

    

    return (
        <>
            <h3 className='font bold'>Misafir Listesi</h3>
            <Form className="d-flex font">
                <FormControl
                    style={{maxWidth: "50%"}}
                    type="search"
                    placeholder="Aramak İstediğiniz Plakayı Giriniz"
                    className="mr-2"
                    aria-label="Search"
                    onChange={onChangeAranacakPlaka}
                />    
            </Form>
            <hr></hr>
            <Row className='center font bold' >
                
                <Col className='col-sm-1'>
                    Plaka
                    </Col>
                <Col className='col-sm-2'>
                    İsim Soyisim
                </Col>
                <Col className='col-sm-2'>
                    Tarih
                </Col>
                <Col className='col-sm-6'>
                    Açıklama
                </Col>
                <Col className='col-sm-1'>
                    Buton
                </Col>
            </Row>
            <hr></hr>
            {
                state.map(e =>
                    <div key={e.id} style={{ marginBottom: '1rem' }}>
                        <ListRow plate={e} />
                    </div>
                )
            }
        </>
    )
    
}

const ListRow = ({ plate }) => {
    const [isEditing, setIsEditing] = useState(false);
    return isEditing
        ? <PlateForm plate={plate} setIsEditing={setIsEditing} />
        : <div>
            <Row className='center font'>
                <Col className='col-md-1'>

                    {plate.nPlate}

                </Col>
                
                <Col className='col-md-2'>
                    {plate.name + " "}
                    {plate.surName}
                </Col>
                <Col className='col-md-2'>
                    {
                        dateFormat(plate.date,"dd.mm.yyyy")
                    }
                </Col>
                <Col className='col-md-6'>
                    {plate.description}
                </Col>
                <Col className='col-md-1'>
                    <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Düzenle</Button>
                </Col>
            </Row>
            <hr></hr>
        </div>
}