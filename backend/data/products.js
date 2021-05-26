// import alogliptin from "./diabe1.jpg";

const products = [

    // ------ Diabetes ------- \\
    {
        imgsrc: "https://www.empr.com/wp-content/uploads/sites/7/2018/12/ac752944889a4c6494dae4f478ea8237-nesina_405478.jpg",
        title: "Alogliptin",
        indication: "Alogliptin is prescribed to reduce high blood sugar level in patients with type 2 diabetes along with diet control and exercise.It should not be used in treating diabetic ketoacidosis or type 1 diabetes.  ",
        dosage: "PO - The initial dose is based on patient’s condition. Maximum recommended dose is 25/2000mg.",
        sideEffects: "Upper respiratory tract infection, heart attack, throat inflammation, diarrhea, high blood pressure, headache, back pain and urinary tract infection.",
        price: 405,
        category:"Diabetes"
    },
    {
        imgsrc: "https://5.imimg.com/data5/ZJ/FV/VB/SELLER-104814248/alogliptin-500x500.jpg",
        title: "Alogliptin and Metformin",
        indication: "Alogliptin and Metformin combination is used along with diet and exercise to improve blood sugar control or to treat hyperglycemia in patients with type 2 diabetes.High blood sugar level can cause damage to the eyes, kidney, and nerves.This combination medication contains alogliptin, a dipeptidyl-peptidase-4 (DPP-4) inhibitor and metformin, a biguanide.",
        dosage: "(125mg/500mg)- Dose is based on patient’s condition.",
        sideEffects: "Lactic Acidosis and pancreatitis.Most Common: Upper respiratory tract infection, nasopharyngitis, diarrhea, hypertension, headache, back pain and urinary tract infection.",
        price: 500,
        category:"Diabetes"
    },
    {
        imgsrc: "https://www.empr.com/wp-content/uploads/sites/7/2018/12/5a26069609d944038725ae95e761a5f1-oseni_405485.jpg",
        title: "Alogliptin and Pioglitazone",
        indication: "Alogliptin and Pioglitazone combination is used to treat high blood sugar level in patients with type 2 diabetes along with diet control and exercise. This combination should not be used to treat type 1 diabetes.This combination medication contains pioglitazone, a thiazolidinedione agent and alogliptin, a DPP-4 inhibitor.",
        dosage: "Dose is based on patient’s condition. Maximum recommended dose is 25/45mg.",
        sideEffects: "Inflammation of throat and nasal passages, back pain and upper respiratory tract infection.",
        price: 450,
        category:"Diabetes"
    },
    {
        imgsrc: "https://5.imimg.com/data5/MR/OX/MY-18174683/sulisent-28canagliflozin-100mg-29-tablet-500x500.jpg",
        title: "Canagliflozin",
        indication: "This medication is an antidiabetic (sodium glucose co-transporter 2 (SGLT2) inhibitor), prescribed for type 2 diabetes mellitus along with diet and exercise. For patients with type 2 diabetes along with diabetic kidney disease, physicians should consider using an SGLT2 inhibitor when the eGFR is at or above 30, especially with albuminuria above 300 mg/g, to lower renal and CV risk as per A.D.A recommendations.",
        dosage: "PO- The recommended initial dose is 100 mg once daily.",
        sideEffects: "Female genital mycotic infections, urinary tract infection and increased urination.",
        price: 298,
        category:"Diabetes"
    },
    {
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKl6UBEBhkp0cUc7ciO3VVRoBjtAf7cA-QPOTggzDmit4AYegpA3mcl9haEtf6nfB5diw&usqp=CAU",
        title: "Diabinese",
        indication: "This medication is a sulfonylurea antidiabetic drug, prescribed for type 2 diabetes. This medication helps to keep blood sugar levels under control.",
        dosage: "PO- The recommended initial dose is 250mg/day. It may be adjusted based on patient’s condition.",
        sideEffects: "Body as a Whole : Low blood sugar, Disulfiram-like,Central Nervous System : Dizziness and headache, Gastrointestinal : Diarrhea, nausea, vomiting, loss of appetite and hunger, Liver : Jaundice, Skin : Itching and hives, Blood : Anemia and decrease in blood counts.",
        price: 345,
        category:"Diabetes"
    },
    {
        imgsrc: "https://www.prestoimages.net/store30/rd14324/14324_pd3794145_1_.jpg",
        title: "Colesevelam HCL",
        indication: "This medication is a bile acid sequestrant, prescribed for familial hypercholesterolemia and type 2 diabetes with other medications.",
        dosage: "For hypercholesterolemia- The recommended dose is one 3.75-gram packet once daily or one 1.875-gram packet twice daily.For Type 2 Diabetes- The recommended dose is 6 tablets once daily or 3 tablets twice daily.",
        sideEffects: "Headache, fatigue, increased level of liver enzyme, runny nose, vomiting, constipation, indigestion, difficulty in swallowinglow blood sugar, nausea and high blood pressure..",
        price: 400,
        category:"Diabetes"
    },
    {
        imgsrc: "https://emedz.net/blog/wp-content/uploads/2020/01/Steglatro-ertugliflozin-696x484.jpg",
        title: "Steglatro",
        indication: "Ertugliflozin tablet is a sodium glucose co-transporter 2 (SGLT2) inhibitor which is prescribed for adult patients with type 2 diabetes as an adjunct therapy to diet control and exercise with a focus to improve glycemic control.It is prescribed either as a monotherapy or in combination with metformin or sitagliptin.  ",
        dosage: "The recommended initial dose of ertugliflozin tablets is 5 mg to be taken once a day.The dose of ertugliflozin can be increased to 15 mg once daily to achieve adequate glycemic control",
        sideEffects: "Common: Frequent urination, low blood sugar level, genital fungal infections, Gastrointestinal: Nausea, pain in the stomach, vomiting, Cardiovascular: Low blood volume, low blood pressure, faster heartbeat, increased LDL-cholesterol level in blood, Nervous system: Confusion, dizziness, headache, irritability, weakness, Respiratory: Difficulty in breathing, nasopharyngitis, Kidney: Urinary tract infections (pyelonephritis, urosepsis or bladder infections), pain or burning sensation while passing urine, blood in urine, reduced kidney function, Others: Foot ulcers or sores, fever, pain or tenderness in the lower limbs, pain in the back, reduced weight, increased thirst",
        price: 500,
        category:"Diabetes"
    },
    {
        imgsrc: "https://5.imimg.com/data5/SELLER/Default/2021/2/KR/IZ/EH/123113767/byetta-10mcg-500x500.jpg",
        title: "Byetta",
        indication: "This medication is a incretin mimetic, prescribed for type 2 diabetes with diet and exercise, either alone or with other medications. For patients with chronic kidney disease who are at elevated risk for CV events, a glucagon-like peptide 1 receptor agonist may lower risk for albuminuria progression and/or CV events, according to new (2019)recommendations of The American Diabetes Association It works by stimulating the pancreas to secrete insulin in hyperglycemic condition.  ",
        dosage: "Adult- The initial dose is 5 mcg injected under the skin (subcutaneously) twice daily, 60 minutes before breakfast or dinner.",
        sideEffects: "Most Common: Nausea.Central Nervous System: Dizziness or lightheadedness, nervousness, mood changes, weakness, shakiness, confusion, epilepsy and loss of consciousness.Gastrointestinal: Extreme thirst, extreme hunger, stomach upset, vomiting, diarrhea and difficulty in swallowing. Skin: Rash, hives and itching. Allergic reactions: Swelling of the face, throat, tongue, lips, eyes, hands, feet, ankles, or lower legs and difficulty in breathing.",
        price: 395,
        category:"Diabetes"
    },
    {
        imgsrc: "https://5.imimg.com/data5/QY/WA/MY-29865653/glibenclamide-tablets-500x500.jpg",
        title: "Glibenclamide",
        indication: "TGlibenclamide is an oral hypoglycemic (glucose lowering) drug used to control blood sugar levels in patients with type 2 diabetes in addition to diet and exercise.It belongs to the chemical group of sulfonylureas",
        dosage: "The treatment is started with a low dose of 2.5 mg per day, and increased up to a maximum of 20 mg per day according to the blood glucose levels.",
        sideEffects: "Digestive tract: Nausea, vomiting, flatulence, abdominal fullness, diarrhea, constipation, heartburn, liver dysfunction, Skin: Rash, skin swelling, photosensitivity reactions (skin reactions following exposure to sunlight) including porphyria cutanea tarda (which is associated with an enzyme deficiency, Blood: Low blood counts, low blood glucose levels, low blood sodium levels, Others: Tiredness, weakness, fever, other allergic reactions, weight gain, joint or muscle pain.",
        price: 456,
        category:"Diabetes"
    },
    {
        imgsrc: "https://cpimg.tistatic.com/05683521/b/4/Glibenclamide-5-Mg-Metformin-500-Mg-Tablets.jpg",
        title: "Glibenclamide and Metformin",
        indication: "This medication contains sulfonylurea and biguanide antidiabetic combination, prescribed for type 2 diabetes.",
        dosage: "Adult: PO- Per tab contains glibenclamide 1.25 mg and metformin 250 mg. As initial therapy: Start with 1 tab 1-2 times/day. It may be increased if needed.",
        sideEffects: "Low blood sugar, upper respiratory tract infection, diarrhea, headache, nausea/vomiting, abdominal pain and dizziness.",
        price: 355,
        category:"Diabetes"
    },
    {
        imgsrc: "https://tajpharma.in/wp-content/uploads/cache/images/remote/i0-wp-com/Gliclazide-BP-80mg-tablets_Taj_Pharma_antidiabetic-1099925899.jpg",
        title: "Gliclazide",
        indication: "This medication is an oral hypoglycemic (anti-diabetic drug), prescribed for type 2 diabetes. It stimulates the pancreas, which helps in more insulin secretion.",
        dosage: "PO- Initially start with 160mgs daily in two divided doses. May go up to 320 mgs daily in two divided doses.",
        sideEffects: "GI disturbances, skin reaction, decrease in blood cell counts, jaundice, vomiting, diarrhea and stomach inflammation.",
        price: 505,
        category:"Diabetes"
    },
    {
        imgsrc: "https://tajgenerics.com/wp-content/uploads/cache/images/Glimepiride-Tablets-USP-4-mg-Taj-Pharma-3/Glimepiride-Tablets-USP-4-mg-Taj-Pharma-3-3850713814.jpg",
        title: "Glimepiride",
        indication: "This medication is a sulfonylurea antidiabetic agent, prescribed for type 2 diabetes. It works by causing the pancreas to produce insulin.",
        dosage: "Adult- PO- Initial- The recommended starting dose is 1-2 mg once daily, with food. Maximum: 2mg/day.",
        sideEffects: "Most Common : Low blood sugar, temporary visual impairment and GI disturbances. Miscellaneous : Dizziness, weakness, headache, nausea/vomiting, lightheadedness, confusion and irritability.",
        price: 500,
        category:"Diabetes"
    },
    {
        imgsrc: "https://5.imimg.com/data5/CK/TL/MY-5656419/1-500x500.jpg",
        title: "Glipizide",
        indication: "This medication is a sulfonylurea antidiabetic agent, prescribed for type 2 diabetes (condition in which the body does not use insulin normally and therefore cannot control the amount of sugar in the blood), particularly in people whose diabetes cannot be controlled by diet alone. It increases the amount of insulin secretion and thus regulates the sugar level in the blood.",
        dosage: "PO: Initial-2.5 to 5 mg/day as a single dose may increase slowly. Doses greater than 15 mg may be given in 2 divided doses. Max: 40 mg/day.",
        sideEffects: "Low blood sugar. Heart: Increased risk of death due to heart problems. Central Nervous System: Dizziness and vertigo. Skin: Allergic skin reactions, inflammation of skin, itching, redness, hives, eruptions and photosensitivity.",
        price: 600,
        category:"Diabetes"
    },


];

module.exports = products;
