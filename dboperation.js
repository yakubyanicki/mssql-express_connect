var config = require("./dbconfig")
const sql = require("mssql")

async function getdata() {
    try {
        let pool = await sql.connect(config)
        console.log("sql server connected...")
        const result = await pool.query("SELECT * FROM Invoices")
        return(result)
    } catch(error) {
        console.log("error:" + error)
    }
}

module.exports = {
    getdata: getdata,
}