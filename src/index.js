import React from 'react';
import ReactDOM from 'react-dom';
import CommissionList from './components/CommissionList';
import CommissionForm from './components/CommissionForm';
import './libraries/bootstrap/dist/bootstrap.min.css';
import './styles/main.css';

// import CommentBox from './components/CommentBox';
//
// ReactDOM.render(
//   <CommentBox
//     url='http://localhost:3001/api/comments'
//     pollInterval={2000000}
// />,
//   document.getElementById('root')
// );

ReactDOM.render(
    <div className="container">
        <CommissionList/>
        <CommissionForm/>
    </div>,
    document.getElementById('root')
);
