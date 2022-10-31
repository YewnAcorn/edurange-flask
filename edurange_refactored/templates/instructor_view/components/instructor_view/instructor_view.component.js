/* This is the entry point for the instructor view and 
 * the super container for the other components.
 */ 
//import { io } from 'socket.io-client';
import Student from "../student/student.component";
import "./instructor_view.css";
import ChatWindow from "../chat_window/chat_window.component";
import StudentList from "../student_list/student_list.component";
import {createRoot} from 'react-dom/client';
import React, { useState, useEffect } from 'react';
function InstructorView() {
  return (

            <div id="instructor_view">
                <StudentList/>
                <ChatWindow />
            </div>
        );
}

var e = document.getElementById('instructor_view');
const root=createRoot(e);

root.render(<InstructorView />);

/*

            <Student />
                <ChatWindow />

*/
