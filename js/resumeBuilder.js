var work = {
    "jobs" : [
        {
            "company" : "Accenture",
            "role" : "Software Engineer",
            "location" : "Dublin, OH",
            "dateIni" : "Mar, 2019",
            "dateEnd" : "Current",
            "description" : 
                "<p>Consulted some big companies as part of its <b><i>Full Stack Engineer</i></b> & <b><i>Cloud</i></b> team. Built <b><i>Micro-Frontend</i></b> " + 
                "applications with <b><i>Java</i></b>, <b><i>Spring Boot</i></b> and <b><i>Angular</i></b> to run on top of legacy systems, extracting " + 
                "existent functionalities and/or implementing new ones. Worked as a <b><i>Full-Stack Engineer</i></b>, designing features, building " + 
                "<b><i>RESTful APIs</i></b>, migrating legacy systems to the new <b><i>Microservice</i></b>/<b><i>Micro-Frontend</i></b> " + 
                "architecture, creating and executing <b><i>Unit Tests</i></b>;</p>" +
                
                "<p>Actively helping with internal knowledge dissemination, promoting internal technical events, mentoring " + 
                "<b><i>Java</i></b>/<b><i>Spring Boot</i></b> and <b><i>Angular</i></b> apprentices, writing blog posts for Accenture Code's community, " + 
                "developing internal projects to fill in AC's necessities and trying out new technologies;</p>" + 
                
                "<p>Acted as an <b><i>AWS Cloud Software Engineer</i></b> to innovate a service that enhances a big tech and entertainment company " + 
                "(in partnership with a large bank) customers delivery experience;</p>" +
                
                "<p><b><i>DevOps</i></b> & <b><i>Continuous Integration Engineer</i></b> for internal, regional and international projects. I bring projects " + 
                "to comply with the latest <b><i>Continuous Integration</i></b> and <b><i>Continuous Delivery</i></b> practices.</p>" +
                
                "<p><b><i>Key achievement</i></b>: Responsible for maintaining and developing new features for the company's main website. " + 
                "Contributed to migrate <b><i>Monolithics</i></b> applications to <b><i>Microservice</i></b> and <b><i>Cloud</i></b> architecture. Delivered apps with 100% on-time record and " + 
                "only minimal updates, following <b><i>Agile</i></b> methodologies and applying <b><i>XP</i></b> best practices. Acted as an <b><i>Anchor</i></b> helping new Engineers to increase " + 
                "their skills and ensuring that they follow best development practices.</p>" +
                
                "<p><b><i>Skills: Java, Spring Boot, TypeScript, JavaScript, Angular, Jasmine/Karma, Git, RESTful, Agile, CI/CD</i></b></p>"
        },
        {
            "company" : "cFive",
            "role" : "Software Engineer",
            "location" : "Laguna Hills, CA",
            "dateIni" : "Jun, 2018",
            "dateEnd" : "Mar, 2019",
            "description" : 
                "<p><b><i>Java, Spring Security SAML and Spring Boot</i></b> - Designed, architected and developed a security model " +
                "(through <b><i>Microservice Architecture</i></b>) to allow access to the LA County main system using Microsoft AAD/MIM. " +
                "The system is accessed by government departments as FBI, Police Department, among others. This project is an " +
                "implementation of a <b><i>SAML 2.0 Service Provider</i></b>, completely built on <b><i>Spring Framework</i></b>. A web solution devised " +
                "for Federated Authentication by integrating <b><i>Spring Boot</i></b> and Spring <b><i>Security SAML</i></b>. The configuration has been " +
                "completely defined using <b><i>Java</i></b> annotations (no XML).</p>" +

                "<p><b><i>Full Stack Developer</i></b> (Java, Jersey, JPA, React/Next, TypeScript, Bootstrap, HTML and CSS).</p>"
        },
        {
            "company" : "Conversant",
            "role" : "Software Engineer",
            "location" : "Westlake Village, CA",
            "dateIni" : "Jun, 2017",
            "dateEnd" : "Jan, 2018",
            "description" : 
                "<p><b><i>Java, Spring Boot, Spring MVC, RESTful</i></b> and <b><i>Hibernate</i></b> – Write code in an <b><i>Agile</i></b> environment for an online Ad Network " +
                "company’s <b><i>Java</i></b> API. Add server-side support for new SaaS UI features, address bug tickets in legacy system with focus " +
                "on <b><i>TDD</i></b> and delivered quality projects that have been well-received.</p>" +

                "<p><b><i>Spring Cloud</i></b> – Implemented from scratch a central config server where all configurable parameters of applications " + 
                "are written version controlled. The benefit of a central config server is that if we change a property for an app, " +
                "it can reflect that on the fly without redeploying the app. The solution maintains all properties of all environments " +
                "(development, staging and production), and if any properties are changed, it will pick up the changes and reflect " +
                "them without an application rebuild or restart.</p>" +

                "<p><b><i>Hazelcast</i></b> and <b><i>Spring AOP</i></b> – Implemented a distributed cache to lock correlated services being treated at the same " +
                "time among different servers.</p>" +

                "<p>Our tests are done in <b><i>Groovy</i></b> with <b><i>Spock</i></b>, but eventually I added the use of an in-memory <b><i>H2</i></b> database for testing " +
                "models rapidly and without need for a network connection as we would require with integration tests; Other " +
                "responsibilities include <b><i>Managing Releases</i></b>, improving release methods/tools and maintaining an old <b><i>Java</i></b> based " +
                "project that keeps data synchronized between our local database and an external data store.</p>"
        }/*,
        {
            "company" : "B2W Digital",
            "role" : "Senior Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Jun, 2014",
            "dateEnd" : "Apr, 2017",
            "description" : "Developed a monitor dashboard based on <b><i>React</i></b>, <b><i>Bootstrap</i></b>, <b><i>Spring Boot</i></b> and <b><i>Hibernate</i></b> " +
            "that provides a single pane of glass to visualize the overall integration process among systems, status " +
            "of communication workflow, data validation and recovery error through message forwarding. The dashboard " +
            "provides <b><i>REST</i></b> and <b><i>SOAP</i></b> APIs and allows integration with 3rd party systems. By developing the monitor I was " +
            "able to reduce the time spent on quality assurance, decreased product defects and increase the operation " +
            "reliability by improving the overall product quality;<p>Designed and developed a cache model that reduced " +
            "considerably the number of http connections; </p><p>Designed a new data model that reduces in 50% the time of  " +
            " performing some <b><i>DB</i></b> operations; </p><p>Re-architected a complex data treatment, partially performing the parsing  " +
            " operations in memory instead of in the disk. By doing this I was able to reduce drastically the overhead  " +
            " parsing the <b><i>XML</i></b> (which used to be a big issue, due to the amount of data and servers that should be updated);  " +
            "</p><p>Designed and developed an integration scenario to send data to a complex distributed system. This  " +
            "integration scenario, based on <b><i>Java</i></b> ScheduledExecutor, <b><i>SAP IDOC</i></b>, <b><i>SSH</i></b> and <b><i>Linux Rsync</i></b> tool, allows updates more than 1000 retail stores in 30% of the time spent previously.</p>"
        },
        {
            "company" : "B2B Digital",
            "role" : "Senior Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Jan, 2013",
            "dateEnd" : "May, 2014",
            "description" : "Worked in a <b><i>Java</i></b> web systems <b><i>Back-End</i></b> development and performance tuning for the biggest " +
            "<b><i>e-commerce</i></b> company in South America, using <b><i>Scrum</i></b> as <b><i>Agile</i></b> methodology, building and maintaining " +
            "<b><i>RESTful</i></b> web services, time measurement and code review to identify issues and suggest improvements,  " +
            "developing new services, building tests using <b><i>JUnit</i></b>, <b><i>Mockito</i></b> and <b><i>Selenium</i></b>, daily contact directly with  " +
            "clients around South America and using <b><i>Jira</i></b> as <b><i>Agile</i></b> tool;<p> I had also been part of a <b><i>Back-End</i></b>  " +
            "integration team for the <b><i>e-commerce</i></b> systems in a high-availability environment, using different technologies  " +
            "such as <b><i>SOAP</i></b>, <b><i>REST</i></b>, <b><i>SFTP</i></b> and <b><i>Proxy</i></b>.</p>"
        },
        {
            "company" : "Infosys / British Petroleum / Devon Energy ",
            "role" : "Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Mar, 2011",
            "dateEnd" : "Dez, 2012",
            "description" : "Created integration services for external systems and information sources (Java, " + 
            "Spring and Hibernate); <p>Responsible for risk assessment, database modeling, requirement analysis " +
            "and configuration management to ensure successful launch of a complex application server upgrade;</p>" +
            "<p>Part of a Global IT team that worked on the migration of the software’s from Devon Energy to British Petroleum.</p>"
        },
        {
            "company" : "Ci&T",
            "role" : "Software Engineer",
            "location" : "Belo Horizonte, Brazil",
            "dateIni" : "Apr, 2009",
            "dateEnd" : "Feb, 2011",
            "description" : "Setup a System Integration for a Logistic and Transportation System using JAX-WS " + 
            "Web services;<p>Developed a Training Management System (JEE/Web Platform) using the Struts Framework.</p>"
        },
        {
            "company" : "Infosys / Syngenta",
            "role" : "Integration Architect and Software Engineer",
            "location" : "Brazil, Argentina and Colombia",
            "dateIni" : "Feb, 2008",
            "dateEnd" : "Mar, 2009",
            "description" : "System integration architect responsible for leading a portfolio analysis as part " +
            "of Enterprise Architecture (EA) team to support a business transformation program for Latin America " +
            "operation of a global agricultural company (10+ USD Billion);<p>Responsible for analyzing the " +
            "existing several SAP instances and 300+ satellite non SAP applications/systems across Latin regions " +
            "and proposed the tailored TO-BE Enterprise Architecture landscape, which replaced obsolete " +
            "applications/systems by utilizing the latest SAP solution/technologies, supports hyper growth " +
            "agricultural business market in the following 5 years.</p>"
        }
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
        */
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
            "school" : "Udacity - Nanodegree",
            "title" : "React - Fundamentals, Redux and Native",
            "dateConclusion" : "2017",
            "description" : ""
        },
        {
            "school" : "UFMG - Universidade Federal de Minas Gerais",
            "title" : "Major in Information Technology with Emphasis on Software Engineering",
            "dateConclusion" : "2007",
            "description" : ""
        },
        {   "school" : "Centro Universitário de Ciências Gerenciais (University of Scientific Management) ",
            "title" : "Technology in Data Processing",
            "dateConclusion" : "2000",
            "description" : ""
        }
    ],
    /*"otherCourses" : [
        {},
        {}
    ],*/
    "certificates" : [
        {
            "certificate" : "AWS Developer Associate",
            "issued" : "January 01, 2023",
            "expiresOn" : "Dezember 31, 2023",
            "path" : "https://www.credly.com/badges/719d809b-6af8-45ce-b473-3bc0455c7d42/public_url",
            "image" : "images/aws-certified-developer-associate-138.png"
        },
        {
            "certificate" : "AWS SysOps Administration",
            "issued" : "January 01, 2023",
            "expiresOn" : "Dezember 31, 2023",
            "path" : "https://www.credly.com/badges/ab89ccf8-8ea3-4735-ac2d-2b6bc1daea44/public_url",
            "image" : "images/aws-certified-sysops-administrator-associate-138.png"
        },
        {
            "certificate" : "Kubernetes Application Developer",
            "issued" : "January 01, 2023",
            "expiresOn" : "Dezember 31, 2023",
            "path" : "https://www.credly.com/badges/0ebefdcc-8c1a-4545-91c3-1c6b1d97da07/public_url",
            "image" : "images/ckad-certified-kubernetes-application-developer-138.png"
        },
        {
            "certificate" : "Terraform Associate",
            "issued" : "January 01, 2023",
            "expiresOn" : "Dezember 31, 2023",
            "path" : "https://www.credly.com/badges/e3823e4e-4880-42c0-99f0-48f21b30186d/public_url",
            "image" : "images/hashicorp-certified-terraform-associate-140-2.png"
        },
        {
            "certificate" : "Cloud Foundry Certified Developer",
            "issued" : "January 01, 2023",
            "expiresOn" : "Dezember 31, 2023",
            "path" : "https://www.credly.com/badges/c43176ff-f7a0-45f5-b362-4bf7f9958635/public_url",
            "image" : "images/cfcd-cloud-foundry-certified-developer-138.png"
        }
    ]
};

education.displaySchool = function() {
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

education.displayCertificate = function() {
    if (!this.certificates.length)
        return;

    var frmtTitle = htmlTitle.replace("%data%", CERTIFICATE_TITLE);
    var frmtTitleDescription = htmlTitleDescription.replace("%data%", CERTIFICATE_TITLE_DESCRIPTION);

    $("#certificate .container").append(htmlHeadStart);
    $("#certificate .heading").append(frmtTitle);
    $("#certificate .heading").append(frmtTitleDescription);
    $("#certificate .heading").append('<div class="col-lg-12"></div>');

    for (var key in this.certificates) {
        frmtPath = htmlPathCertificate.replace("%data%", this.certificates[key].path);
        frmtImage = htmlImageCertificate.replace("%data%", this.certificates[key].image);
        frmtImage = frmtImage.replace("%description%", this.certificates[key].certificate);

        console.log("Here " + frmtPath);
        console.log("And Here " + frmtImage);

        if (key == 0 || key == 3 || key == 6) {
            $("#certificate .col-lg-12").append(htmlRowCertificate);
            $("#certificate .col-lg-12").append("<p></p>");
        }

        $("#certificate .row:last").append(htmlColumnKeyCertificate);
        $("#certificate .col-sm-4:last").append(frmtPath);
        $("#certificate .path:last").append(frmtImage);
    }
}

work.display();
education.displaySchool();
education.displayCertificate();