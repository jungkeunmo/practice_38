const homeController = (req, res) => {
    res.render("screens/home");
};

const contactController = (req, res) => {
    res.render("screens/contact");
};

const mongodbController = (req, res) => {
    res.render("screens/mongodb");
};

const nodejsController = (req, res) => {
    res.render("screens/nodejs");
};

const reactController = (req, res) => {
    res.render("screens/react");
};

const javascriptController = (req, res) => {
    res.render("screens/javascript");
};

export const globalController = {
    homeController,
    contactController,
    mongodbController,
    nodejsController,
    reactController,
    javascriptController,
};