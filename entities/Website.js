"use strict";
class Website {
    constructor(project, name, urls) {
        this.project = project;
        this.name = name;
        this.urls = urls;
        this.db = new Db();
    }

    getByProject(project) {

    }

    getByName() {

    }

    save() {
        return this.db.saveWebsite(this.toPlainObject());
    }
    toPlainObject(){
        var plainObject ={};
        plainObject.name = this.name;
        plainObject.urls = this.urls;
        plainObject.project_name = this.project.name;
        return plainObject;
    }
}