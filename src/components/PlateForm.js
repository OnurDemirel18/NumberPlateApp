import { useState, React, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { DeletePlate, EditPlate, NewPlate } from "../services/plates";
import { useDispatch } from "react-redux";
import './plateform.css';

export default ({plate, setIsEditing}) => {
    const [nPlate, setNPlate] = useState(" ");
    const [id, setId] = useState();
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [surName, setSurName] = useState(" ");
    const [date, setDate] = useState(Date);
    const [isNewPlate, setIsNewPlate] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        
        if(plate !== undefined){    
            setIsNewPlate(false);
            setDescription(plate.description);
            setSurName(plate.surName);
            setName(plate.name);
            setNPlate(plate.nPlate);
            setDate(plate.date);         
        }
        else{           
            setIsNewPlate(true);            
        }
    }, [plate])

    return <Form  className='text' 
        onSubmit={event => {
            
            if(isNewPlate){                
                NewPlate(dispatch,{nPlate: nPlate, name:name,surName:surName,date:date,description:description});
            }
            else{
                EditPlate(dispatch,{id: plate.id,nPlate: nPlate, name:name,surName:surName, date:date, description:description})
                setIsEditing(false);
            }
        }}
        >
        <div >
        <Row>
            <Col className='col-sm-4 '>
                <Form.Label>İsim:</Form.Label>
                <Form.Control type='text'  placeholder={name} onChange={event => setName(event.target.value)} />
            </Col>
            <Col className='col-sm-4' >
                <Form.Label style={{minWidth:'245px'}}>Soy isim:</Form.Label>
                <Form.Control type='text' placeholder={surName} onChange={event => setSurName(event.target.value)}></Form.Control>
            </Col>
            <Col className='col-sm-4'>
                <Form.Label>Plaka:</Form.Label>
                <Form.Control type='text' placeholder={nPlate} onChange={event => setNPlate(event.target.value)} />
            </Col>
   
        </Row>
        <Row style={{ marginTop: '1rem' }}>
        <Col className='col-md-6'>
                <Form.Label>Açıklama:</Form.Label>
                <Form.Control type='text-area' placeholder={description} onChange={event => setDescription(event.target.value)} />
            </Col>
            <Col className='col-md-6'>
                <Form.Label>Tarih:</Form.Label>
                <Form.Control type="date"  placeholder="Due date" value={date} onChange={event => setDate(event.target.value)} />
            </Col>
        </Row>
        <div  className='button' style={{ marginTop: '1rem' }}>
                {isNewPlate ? <Button variant='primary' type='submit'>Ekle</Button>
                    : <div className='buttons'>
                        <Button variant='secondary' style={{marginRight: '1rem'}} onClick={() => setIsEditing(false)}>İptal</Button>
                        <Button variant='danger' style={{marginRight: '1rem'}} onClick={() => DeletePlate(dispatch,plate)}>Sil</Button>
                        <Button variant='success' style={{marginRight: '1rem'}} type='submit'>Düzenle</Button>                   
                    </div>}
        </div>
        </div>
    </Form>
    
}