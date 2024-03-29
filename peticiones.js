const axios = require("axios");

const ejecutar = async () => {
    const url = ""; // Pones aquí la url del servicio web
    const numRequests = 1000;

    try {
        const requests = Array.from({ length: numRequests }, () => axios.get(url));

        await Promise.all(requests);
        console.log(`Se enviaron ${numRequests} solicitudes a: ${url}`);
    } catch (error) {
        console.error("Error al realizar solicitudes:", error);
    }
}


ejecutar();
