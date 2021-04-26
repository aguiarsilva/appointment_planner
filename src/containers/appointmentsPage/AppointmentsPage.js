import React, { useState } from "react";
import { TileList } from '../../components/tileList/TileList';
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const addAppointment = props.addAppointment;
  const contacts = props.contacts;

  const [contact, setContacts] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(title, contact, date, time);
   setTitle("");
   setContacts("");
   setDate("");
   setTime("");
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContacts}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arr={props.appointments}/>
      </section>
    </>
  );
  };
