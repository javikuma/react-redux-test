import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux';
// Actions
import { addTech } from '../../actions/techActions';

import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === '') {
            M.toast({ html: 'Por favor ingrese el Nombre y Apellido'})
        } else {
            addTech({
                firstName,
                lastName
            });

            // Clear fields
            setFirstName('');
            setLastName('');
        }

    }

    return (
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>Agregar Técnico</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={ e => setFirstName(e.target.value)}    
                        />
                        <label htmlFor="firstName" className="active">Nombre</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={ e => setLastName(e.target.value)}    
                        />
                        <label htmlFor="lastName" className="active">Apellido</label>
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

AddTechModal.propTypes= {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal);
