const config = {
    user: "sa",
    password: "admin",
    server: "DESKTOP-CADAO2K", 
    database: "Northwind",
    trustServerCertificate:true,
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: "",
    },
    port:49693
}

module.exports = config
