var work = {
    "jobs" : [
        {
            "company" : "B2W Digital",
            "role" : "Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Jun, 2013",
            "dateEnd" : "Mar, 2017",
            "description" : "Developed a monitor dashboard based on AngularJS, Bootstrap, Spring, Hibernate and Tomcat " +
            "that provides a single pane of glass to visualize the overall integration process among systems, status " +
            "of communication workflow, data validation and recovery error through message forwarding. The dashboard " +
            "provides REST and SOAP APIs and allows integration with 3rd party systems. By developing the monitor I was " +
            "able to reduce the time spent on quality assurance, decreased product defects and increase the operation " +
            "reliability by improving the overall product quality;<p>Designed and developed a cache model that reduced " +
            "considerably the number of http connections; </p><p>Designed a new data model that reduces in 50% the time of  " +
            " performing some DB operations; </p><p>Re-architected a complex data treatment, partially performing the parsing  " +
            " operations in memory instead of in the disk. By doing this I was able to reduce drastically the overhead  " +
            " parsing the XML (which used to be a big issue, due to the amount of data and servers that should be updated);  " +
            "</p><p>Designed and developed an integration scenario to send data to a complex distributed system. This  " +
            "integration scenario allows updates more than 1000 retail stores in 30% of the time spent previously.</p>"
        },
        {
            "company" : "B2B Digital",
            "role" : "Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Jan, 2012",
            "dateEnd" : "May, 2013",
            "description" : "Worked in a Java web systems back-end development and performance tuning for the biggest " +
            "commerce company in South America, using Scrum as Agile Methodology, building and maintaining " +
            "RESTful web services, time measurement and code review to identify issues and suggest improvements,  " +
            "developing new services, building tests using JUnit, Mockito and Selenium, daily contact directly with  " +
            "clients around South America and using Jira as a bug tracking tool;<p> I had also been part of a back-end  " +
            "integration team for the e-commerce systems in a high-availability environment, using different technologies  " +
            "such as SOAP, REST, SFTP and Proxy.</p>"
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
            "company" : "Infosys / Bombardier Transport",
            "role" : "Software Engineer",
            "location" : "Sao Paulo, Brazil",
            "dateIni" : "Mar, 2010",
            "dateEnd" : "Dez, 2011",
            "description" : "Setup a System Integration for a Logistic and Transportation System using JAX-WS Web " +
            "services; <br>Developed a Training Management System (JEE/Web Platform) using the Struts Framework."
        },
        {
            "company" : "Infosys / British Petroleum / Devon Energy",
            "role" : "Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Apr, 2009",
            "dateEnd" : "Feb, 2010",
            "description" : "Created integration services for external systems and information sources " +
            "(Java, Spring and Hibernate); <p>Responsible for risk assessment, database modeling, requirement " +
            "analysis and configuration management to ensure successful launch of a complex application server " +
            "upgrade;</p><p>Part of a Global IT team that worked on the migration of the software’s from Devon " +
            "Energy to British Petroleum.</p>"
        },
        {
            "company" : "Infosys / Syngenta",
            "role" : "Software Engineer",
            "location" : "Brazil, Argentina and Colombia",
            "dateIni" : "Feb, 2008",
            "dateEnd" : "Mar, 2009",
            "description" : "System integration architect responsible for leading a portfolio analysis as part of " +
            "Enterprise Architecture (EA) team to support a business transformation program for Latin America " +
            "operation of a global agricultural company (10+ USD Billion);" +
            "<p>Responsible for analyzing the existing several SAP instances and 300+ satellite non SAP " +
            "applications/systems across Latin regions and proposed the tailored TO-BE Enterprise " +
            "Architecture landscape, which replaced obsolete applications/systems by utilizing the latest SAP " +
            "solution/technologies, supports hyper growth agricultural business market in the following 5 years.</p>"
        },
        {
            "company" : "AMS - Arcelor Mittal Sistemas",
            "role" : "Software Engineer",
            "location" : "Belo Horizonte, Brazil",
            "dateIni" : "Jan, 2005",
            "dateEnd" : "Dez, 2007",
            "description" : "Software developer using JEE platform combined with various frameworks and technologies " +
            "such as Struts, JSP, Servlet, EJB, Hibernate, JAX-RS, JAX-WS, Spring, HTML, CSS and JavaScript; " +
            "<p>Worked in development, implantation and maintenance of MES (Manufactory Execution System) for " +
            "ArcelorMittal long carbon steel industry; </p>" +
            "<p>Project Lead working with Software Requirements helping other developers on the Project.</p>"
        },
        {
            "company" : "Vetta Technologies",
            "role" : "Software Engineer",
            "location" : "Belo Horizonte, Brazil",
            "dateIni" : "Sep, 2003",
            "dateEnd" : "Nov, 2004",
            "description" : "Responsible for design and implementation of VESF (Vetta Enterprise Framework), a " +
            "presentation framework used in many products of different customers, such as Vega do Sul and Vallourec " +
            "& Mannesmann Tubes. This framework, based on J2EE, Struts and Hibernate+JPA cut web interface " +
            " development time drastically and eased the user interface development. " +
            "<p>UOL Sponsored Links, a high-availability online advertising Java software for #1 Brazilian ISP " +
            "similar to Google AdWords</p>"
        },
        {
            "company" : "Accenture",
            "role" : "Integration Architect and Software Engineer",
            "location" : "Belo Horizonte, Brazil",
            "dateIni" : "Jan, 2000",
            "dateEnd" : "Dez, 2003",
            "description" : "SAP PI Leader Consultant responsible for the integration of systems related to a " +
            " variety of SAP and non-SAP scenarios; Development and maintenance of several interfaces using " +
            "different Adapters type (SOAP, RFC, XI, JDBC, File, JMS, FTP and Proxy); Security, admin and " +
            "performance activities for Process Integration; Configuration of SAP GRC NFe."
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
        {   "school" : "Centro Universitário de Ciências Gerenciais (University of Scientific Management) ",
            "title" : "Technology in Data Processing",
            "dateConclusion" : "2000",
            "description" : ""
        },
        {
            "school" : "UFMG - Universidade Federal de Minas Gerais",
            "title" : "Major in Information Technology with Emphasis on Software Engineering",
            "dateConclusion" : "2007",
            "description" : ""
        },
        {
            "school" : "Java",
            "title" : "Sun Certified Java Programmer",
            "dateConclusion" : "2005",
            "description" : ""
        },
        {
            "school" : "Java",
            "title" : "Sun Certified Web Component Developer",
            "dateConclusion" : "2005",
            "description" : ""
        },
        {
            "school" : "SAP NetWeaver",
            "title" : "SAP Certified Development Consultant SAP NetWeaver (focus Java)",
            "dateConclusion" : "2005",
            "description" : ""
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