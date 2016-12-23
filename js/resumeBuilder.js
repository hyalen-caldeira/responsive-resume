var work = {
    "jobs" : [
        {
            "company" : "LASA - Lojas Americanas SA",
            "role" : "Software Engineer",
            "location" : "Rio de Janeiro, Brazil",
            "dateIni" : "Jan, 2012",
            "dateEnd" : "Present",
            "description" : "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius."
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