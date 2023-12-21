const serverInfo = {
    serverName: 'Crio Server',
    version: '1.0.0',
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString()
}

const getServerDetails = (request, response) => {
    response.status(200).json(serverInfo)
}

module.exports = { getServerDetails }