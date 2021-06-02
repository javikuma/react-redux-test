import React, { useState } from 'react'
// Prop-Types
import PropTypes from 'prop-types'

// Redux connect
import { connect } from 'react-redux'

// Actions
import { addLog } from '../../actions/logActions';

// Components
import TechSelectOptions from '../techs/TechSelectOptions';

// Materialize
import M from 'materialize-css/dist/js/materialize.min.js'


const AddLogModal = ({ addLog }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === '') {
            M.toast({ html: 'Por favor ingrese el Mensaje y el Técnico'})
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            addLog(newLog);

            M.toast({ html: `Log añadido por ${tech}`});


            // Clear fields
            setMessage('');
            setTech('');
            setAttention(false);
        }

    }

    return (
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Agregar System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={ e => setMessage(e.target.value)}    
                        />
                        <label htmlFor="message" className="active">Mensaje del Log</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={ e => setTech(e.target.value)}
                        >
                            <option value="" disabled>Selecciona el técnico</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Necesita Atención</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect blue waves-light btn"
                >
                    Agregar
                </a>
            </div>
        </div>
    )
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}

const modalStyle = {
    with: '75%',
    height: '75%',
}

export default connect(null, { addLog })(AddLogModal)
