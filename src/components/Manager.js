import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function Manager() {

    const data=[
        {"sid":"N787808","seatno":2002,"name":"Prithvi"},
        {"sid":"P364808","seatno":2012,"name":"Aditya"},
        {"sid":"K928808","seatno":2082,"name":"Anitya"},
        {"sid":"V737808","seatno":2073,"name":"Ray"},
        {"sid":"M93808","seatno":2064,"name":"Ankitha"},
    ]

    return (
        
        <div className="mx-auto">
            <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand style={{ justifyContent: "center" }}>
                    Find It
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="#login">Jagan</a>
                    </Navbar.Text>
                </Navbar.Collapse>

                </Container>

            </Navbar>

            </div>
            <div className="container">
                <div className="container m-5">
                <h1>This is Your Team - Jagan</h1>
            </div>
                <div className="w-100 text-center">
                    <table className="m-5 text-center">
                        <tr className="">
                            <th style={{"font-size":50}}>
                                SID
                            </th>
                            <th style={{"font-size":50}}>
                                Name
                            </th>
                            <th style={{"font-size":50}}>
                                Seat Number
                            </th>
                        </tr>
                        <tr style={{"font-size":40}}>
                            <td >
                                {data.map((s) => (
                                <option>
                                    {s.sid}
                                </option>
                                ))}
                            </td>
                            <td>
                                {data.map((s) => (
                                <option>
                                    {s.name}
                                </option>
                                ))}
                            </td>
                            <td>
                                {data.map((s) => (
                                <option>
                                    {s.seatno}
                                </option>
                                ))}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default Manager