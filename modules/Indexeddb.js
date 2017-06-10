"use strict";
class Db {
    constructor() {
        this.DB_NAME = "CSS_REGRESSION";
        this.STORE_PROJECT = "Project";
        this.STORE_WEBSITE = "Website";
        this.db = new Dexie(this.DB_NAME);
        this.db.version(1).stores({
            project: 'name,id',
            website: 'name,project_name,id,urls'
        })
    }

    saveProject(project) {
        /*TODO project should be a plain object.*/
        /*TODO is pending.*/
        return this.db.project.put({name: project.name}).then(()=> {
            return this.db.project.get(project.name);
        });
    }

    saveWebsite(website) {
        /*TODO id is pending.*/
        return this.db.website.put(website).then(()=> {
            return this.db.website.get(website.name);
        });
    }
}
