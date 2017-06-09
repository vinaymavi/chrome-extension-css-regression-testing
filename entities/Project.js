"use strict";

class Project {
    constructor(name) {
        this.name = name;
        this.db = new Db();
    }

    getByName(name) {

    }

    save() {
        this.db.saveProject(this);
    }
}