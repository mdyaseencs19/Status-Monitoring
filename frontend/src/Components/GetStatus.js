import React, { useState, useEffect } from 'react';
import { getAmazonStatus, getGoogleStatus } from "../helper/APICall.js";
import { Table } from 'react-bootstrap';


const GetStatus = ({ 
    name = ""
 }) => {

    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    
    const preloadAmazonStatus = () => {
        setLoading(true);
        getAmazonStatus().then((data) => {
            if (data.error) {
                setResponse(data);
                setLoading(false);
            } else {
                setResponse(data);
                setLoading(false);
            }
        });
    }

    const preloadGoogleStatus = () => {
        setLoading(true);
        getGoogleStatus().then((data) => {
            if (data.error) {
                setResponse(data)
                setLoading(false);
            } else {
                setResponse(data);
                console.log(data.duration)
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        if(name === "Amazon") {
            preloadAmazonStatus();
            setInterval(() =>{
                preloadAmazonStatus();
            }, 60000)
        }
        else if(name === "Google") {
            preloadGoogleStatus();
            setInterval(() =>{
                preloadGoogleStatus();
            }, 60000)
        }
        else if(name === "all") {
            preloadAmazonStatus();
            preloadGoogleStatus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadingMessage = () => {
        return (
            <div id="loader" className="text-center m-4">
                <h2>Loading...<i className="fa fa-spinner fa-pulse"></i> </h2>
            </div>
        );
    }   

    return (
        <>
            {loading ? loadingMessage() : ""}
            { !loading ? 
                <>
                    <h1 className="text-center mt-4"> Status of {name} </h1>
                    <Table bordered hover responsive style={{ display: loading ? "none" : "block" }} className="center1 mt-4">
                        {
                            response.url ? (
                                <tbody>
                                    <tr>
                                        <td>URL</td>
                                        <td>{response.url ? response.url : ""}</td>
                                    </tr>
                                    <tr>
                                        <td> statusCode </td>
                                        <td> {response.statusCode ? response.statusCode : ""} </td>
                                    </tr>
                                    <tr>
                                        <td> duration </td>
                                        <td> {response.duration} </td>
                                    </tr>
                                    <tr>
                                        <td> date </td>
                                        <td> {response.date ? response.date : ""} </td>
                                    </tr>
                                    <tr>
                                        
                                    </tr>
                                </tbody>
                            ) : <h3 className="text-danger">An Error Occured.!</h3>
                        }
                    </Table>
                    { response.error ? <p className="container text-justify">{response.error}</p> : ""}
                </>
            : " "}
        </>
    )
}

export default GetStatus;