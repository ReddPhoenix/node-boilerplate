// List of allowed domains
// Add allowed domains here with localhost
const allowedOrigins = ['localhost'];

module.exports = (req, res, next) => {

    let isDomainAllowed = allowedOrigins.indexOf(req.hostname) !== -1;

    if (!isDomainAllowed)
        return res.status(403).json({
            message: 'Access Restricted'
        });
    
    next();
};