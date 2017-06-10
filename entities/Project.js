"use strict";

class Project {
    constructor(name) {
        this.name = name;
        this.db = new Db();
    }

    getByName(name) {

    }

    save() {
        return this.db.saveProject(this);
    }
}