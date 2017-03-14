var work = {
    "jobs" : [
        {
            "company" : "B2W Digital",
            "role" : "Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Jun, 2013",
            "dateEnd" : "Mar, 2017",
            "description" : "<p>• Developed a monitor dashboard based on AngularJS, Bootstrap, Spring, Hibernate and Tomcat " +
            "that provides a single pane of glass to visualize the overall integration process among systems, status " +
            "of communication workflow, data validation and recovery error through message forwarding. The dashboard " +
            "provides REST and SOAP APIs and allows integration with 3rd party systems. By developing the monitor I was " +
            "able to reduce the time spent on quality assurance, decreased product defects and increase the operation " +
            "reliability by improving the overall product quality;</p> <p>• Designed and developed a cache model that reduced " +
            "considerably the number of http connections; </p><p>• Designed a new data model that reduces in 50% the time of  " +
            " performing some DB operations; </p><p>• Re-architected a complex data treatment, partially performing the parsing  " +
            " operations in memory instead of in the disk. By doing this I was able to reduce drastically the overhead  " +
            " parsing the XML (which used to be a big issue, due to the amount of data and servers that should be updated);  " +
            "</p><p>• Designed and developed an integration scenario to send data to a complex distributed system. This  " +
            "integration scenario allows updates more than 1000 retail stores in 30% of the time spent previously.</p>"
        },
        {
            "company" : "B2B Digital",
            "role" : "Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Jan, 2012",
            "dateEnd" : "May, 2013",
            "description" : "• Worked in a Java web systems back-end development and performance tuning for the biggest " +
            "commerce company in South America, using Scrum as Agile Methodology, building and maintaining " +
            "RESTful web services, time measurement and code review to identify issues and suggest improvements,  " +
            "developing new services, building tests using JUnit, Mockito and Selenium, daily contact directly with  " +
            "clients around South America and using Jira as a bug tracking tool; • I had also been part of a back-end  " +
            "integration team for the e-commerce systems in a high-availability environment, using different technologies  " +
            "such as SOAP, REST, SFTP and Proxy."
        },
        {
            "company" : "SAP NetWeaver (Java)",
            "role" : "Official Instructor",
            "location" : "Sao Paulo, Brazil",
            "dateIni" : "Sep, 2007",
            "dateEnd" : "Aug, 2014",
            "description" : "Instructor for SAP NetWeaver (focus Java)."
        },
        {
            "company" : "AMS - Arcelor Mittal Sistemas",
            "role" : "Software Engineer",
            "location" : "Belo Horizonte, Brazil",
            "dateIni" : "Jan, 2012",
            "dateEnd" : "Dez, 2011",
            "description" : "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius."
        },
        {
            "company" : "Infosys Technologies",
            "role" : "Software Engineer",
            "location" : "Belo Horizonte, Brazil",
            "dateIni" : "Jan, 2009",
            "dateEnd" : "Dez, 2010",
            "description" : "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius."
        }
    ]
};

work.display = function() {
    if (!this.jobs.length)
        return;

    var frmtDateFrom;
    var frmtDateTo;
    var frmtCompanyName;
    var frmtTitle = htmlTitle.replace("%data%", WORK_TITLE);
    var frmtTitleDescription = htmlTitleDescription.replace("%data%", WORK_TITLE_DESCRIPTION);

    $("#experience .container").append(htmlHeadStart);
    $("#experience .heading").append(frmtTitle);
    $("#experience .heading").append(frmtTitleDescription);

    for (var key in this.jobs) {
        frmtDateFrom = htmlDateFrom.replace("%data%", this.jobs[key].dateIni);
        frmtDateTo = htmlDateTo.replace("%data%", this.jobs[key].dateEnd);
        frmtCompanyName = htmlCompanyName.replace("%data%", this.jobs[key].company);
        frmtRole = htmlRole.replace("%data%", this.jobs[key].role);
        frmtDetail = htmlDetail.replace("%data%", this.jobs[key].description);

        $("#experience .container").append(htmlRow);
        $("#experience .row:last").append(htmlColumnKey);
        $("#experience .row:last").children().append(frmtDateFrom);
        $("#experience .workYear:last").append(frmtDateTo);
        $("#experience .row:last").append(htmlColumnDetail);
        $("#experience .row:last .rightArea").append(htmlLeftArrow);
        $("#experience .row:last .rightArea").append(htmlPanelDetail);
        $("#experience .row:last .exCon").append(frmtCompanyName);
        $("#experience .row:last .exCon").append(frmtRole);
        $("#experience .row:last .exCon").append(frmtDetail);
    }
}

var education = {
    "schools" : [
        {
            "school" : "UFMG - Universidade Federal de Minas Gerais",
            "title" : "Software Engineer",
            "dateConclusion" : "1998",
            "description" : "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius."
        },
        {   "school" : "UNA - Uniao de Negocios Administrativos",
            "title" : "Data Processing",
            "dateConclusion" : "1996",
            "description" : "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius."
        }
    ]/*,
    "otherCourses" : [
        {},
        {}
    ],
    "certified" : [
        {},
        {}
    ]*/
};

education.display = function() {
    if (!this.schools.length)
        return;

    console.log("Olha eu aqui de novo");

    var frmtDateConclusion;
    var frmtSchool;
    var frmtTitle = htmlTitle.replace("%data%", EDUCATION_TITLE);
    var frmtTitleDescription = htmlTitleDescription.replace("%data%", EDUCATION_TITLE_DESCRIPTION);

    $("#education .container").append(htmlHeadStart);
    $("#education .heading").append(frmtTitle);
    $("#education .heading").append(frmtTitleDescription);

    for (var key in this.schools) {
        frmtDateConclusion = htmlDateFrom.replace("%data%", this.schools[key].dateConclusion);
        frmtSchoolName = htmlCompanyName.replace("%data%", this.schools[key].school);
        frmtRole = htmlRole.replace("%data%", this.schools[key].title);
        frmtDetail = htmlDetail.replace("%data%", this.schools[key].description);

        $("#education .container").append(htmlRow);
        $("#education .row:last").append(htmlColumnKey);
        $("#education .row:last").children().append(frmtDateConclusion);
        $("#education .row:last").append(htmlColumnDetail);
        $("#education .row:last .rightArea").append(htmlLeftArrow);
        $("#education .row:last .rightArea").append(htmlPanelDetail);
        $("#education .row:last .exCon").append(frmtSchoolName);
        $("#education .row:last .exCon").append(frmtRole);
        $("#education .row:last .exCon").append(frmtDetail);
    }
}

work.display();
education.display();