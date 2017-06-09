/**
 * Created by vku131 on 6/3/17.
 */

class MockData {
    crateMockData() {
        this.project = null;
        this.website = null;
        this.createProject();
        this.createWebsite();
        return this.website;
    }

    createProject() {
        const PROJECT_NAME = "MyWeb";
        this.project = new Project(PROJECT_NAME);
        this.project.save();
    }

    createWebsite() {
        const WEB_SITE_NAME = "MySite";
        const urls = ['http://localhost/index.html', 'http://localhost/aboutus.html', 'http://localhost/contactus.html'];
        this.website = new Website(this.project, WEB_SITE_NAME, urls);
        this.website.save();
    }
}