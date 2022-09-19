import {jsPDF} from 'jspdf';

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

const arr = [
    {
        "name":"me",
        "lastname":"other"
    },
    {
        "name":"other",
        "lastname":"other"
    }
];

doc.table(1,1,arr,["name","lastname"]);

//doc.text(string, 10, 10);

doc.save("a4.pdf");
