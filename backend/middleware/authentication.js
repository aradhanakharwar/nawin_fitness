export const adminAuth = (req, res, next) => {
    if (!req.session?.adminId) {
        return res.redirect("/admin/login");
    };

    next();
};


export const redirectIfLoggedIn = (req, res, next) => {
    if (req.session?.adminId) {
        return res.redirect("/admin")
    }
    next();
}