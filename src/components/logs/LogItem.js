import React from 'react'
// Prop-Types
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux';
// Actions
import { deleteLog, setCurrent } from '../../actions/logActions';

// import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es';

// Materialize
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent }) => {

    const onDelete = () => {
        deleteLog(log.id);

        M.toast({ html: `Log Deleted` })
    }

    return (
        <li className="collection-item">
            <div>
                <a 
                    href="#edit-log-modal"
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}` }
                    onClick={ () => setCurrent(log) }
                >
                        {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span>{' '}
                    última actualización por{' '}
                    <span className="black-text">{log.tech}</span>{' - '} 
                    { moment(log.date).format('Do MMMM YYYY, hh:mm:ss a') }
                     {/* en <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment> */}
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem);
