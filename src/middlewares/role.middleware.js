module.exports = (role) => {
    return (req,res,next) => {
        if(!role.includes(req.body.role)){
            return  res.status(401).json({
                success:false,
                message: 'Access Denied'
            })
        }
        next();
    };
}