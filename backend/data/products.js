const products = [
    // ------ Dermatology  ------- \\
    {
        imgsrc: "https://tiimg.tistatic.com/fp/1/006/419/tazarotene-cream-0-1--641.jpg",
        title: "Tazarotene",
        indication: "This medication is a retinoid, prescribed for psoriasis and acne. It may decrease skin inflammation and skin changes associated with psoriasis.",
        dosage: "Adult: Topical- As 0.05 or 0.1% cream/gel: Apply once in the evening.",
        sideEffects: "Skin: Itching, burning/stinging, redness, skin peeling, irritation, worsening of psoriasis, rash, dry skin, bleeding, localized swelling, high cholesterol levels, desquamation, contact dermatitis, discoloration of skin and photosensitivity.",
        price: 420.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/D0VJ7Lr1/iso.jpg",
        title: "Isotretinoin ",
        indication: "This medication is a retinoid, prescribed for acne and other skin disorders. It reduces skin oil production, changing the characteristics of the skin oil, and preventing abnormal hardening of the skin.",
        dosage: "Adult- PO- The recommended dose range is 0.5 to 1.0 mg/kg/day given in two divided doses with food for 15 to 20 weeks.",
        sideEffects: "Allergic reactions, fast heart rate and stroke.",
        price: 299.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/JhvtQZdS/mino.png",
        title: "Minocycline",
        indication: "Minocycline is a broad spectrum tetracycline antibiotic. It acts by inhibiting the growth of bacteria in the body, It may be effective in other infections as well, however several bacteria have developed resistance to the drug, It may be used in patients who are allergic to the penicillin group of drugs as an alternative.",
        dosage: "Children over 12 years: 50mg every 12 hours, Adults The usual  dosage is 100 mg every 12 hours. The  dosage and duration varies according to the type of infection.For local use in the gums, the dose is 1mg given beneath the gums.",
        sideEffects: "Loss of appetite, nausea, vomiting, diarrhea, indigestion, mouth ulcer, discoloration of the tongue and difficulty in swallowing.",
        price: 300.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/L6x9TjJv/calamine.jpg",
        title: "Calamine Lotion",
        indication: "This medication is an anti-itch medication that contains mixture of zinc oxide (ZnO) with about 0.5% iron (III) oxide, prescribed for itching skin conditions. This medication in some cases is used as a mild antiseptic to arrest infections caused by scratching the affected area. Calamine is proved to be an effective medication in acne treatment.",
        dosage: "Adult: Topical- Apply 1-4 times/day.",
        sideEffects: "Rash or irritation.",
        price: 240.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/K8K2DwSv/dim.jpg",
        title: "Dimethicone",
        indication: "This medication is an emollient, prescribed for pediculosis, and other skin conditions.",
        dosage: "Apply as directed by Physician",
        sideEffects: "Rarely, redness, pain and irritation at the site of application.",
        price: 220.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/90x6GtL7/ss.jpg",
        title: "Sucralfate",
        indication: "This medication is a gastric protective agent, prescribed for intestinal ulcers.",
        dosage: "Adult- PO- The recommended  dosage for duodenal ulcer is 1 g four times per day on an empty stomach.",
        sideEffects: "Diarrhea, nausea, vomiting, gastric discomfort, indigestion, flatulence and dry mouth, Itching and rash, Dizziness, sleeplessness, sleepiness and unsteadiness,Back pain and headache.",
        price: 190.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/WbgzwdMH/adap.jpg",
        title: "Adapalene",
        indication: "Adapalene is a topical retinoid-like compound used to treat mild to moderate acne by preventing the formation of pimples acting deeply in the source.It also prevents the formation of new acne by restoring skin texture and tone.",
        dosage: "Topical- A thin film of gel should be applied once a day to affected areas after washing the skin.",
        sideEffects: "A brief sensation of warmth or stinging may occur immediately after applying the medication, redness, dryness, itching of the skin and scaling, mild burning, or worsening of acne may occur during the first 2-4 weeks of using the medication.",
        price: 320.00,
        countInStock : 500,
        category: "Dermatology",
    },

    {
        imgsrc: "https://i.postimg.cc/NjNxBC5T/nad.png",
        title: "Nadifloxacin",
        indication: "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
        dosage: "Topical- Apply a thin layer to the affected area as directed by your physician.",
        sideEffects: "Itching, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
        price: 285.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/cJgfZxqy/ery.jpg",
        title: "Erythromycin",
        indication: "This medication is an antibiotic, prescribed for certain types of bacterial infections such as bronchitis, diphtheria, legionnaires' disease, pertussis etc.It slows or stops bacterial cell growth.",
        dosage: "PO- Adults: The usual dose is 250 mg every 6 hours taken one hour before meals.Child-The usual  dosage is 30 to 50 mg/kg/day in divided doses.",
        sideEffects: "Most Frequent : Nausea, vomiting, abdominal pain, diarrhea and loss of appetite.",
        price: 325.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/nhMDYFhj/oxy.jpg",
        title: "Oxytetracycline",
        indication: "This medication is an antibiotic, prescribed for various infections such as acne, dermatitis, gonorrhea, etc.",
        dosage: "PO- The recommended dose range is 250 to 1.5gm in divided doses.Topical-Apply a thin layer over the affected skin 4 times per day.",
        sideEffects: "Loss of appetite, nausea, vomiting, diarrhea, tongue inflammation, difficulty in swallowing and inflammatory lesions.",
        price: 225.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://5.imimg.com/data5/FY/GY/MY-39084219/nadifloxacin-cream-500x500.jpg",
        title: "Nadifloxacin",
        indication: "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
        dosage: "as directed by your physician.",
        sideEffects: "Itching, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
        price: 200.00,
        countInStock : 500,
        category: "Dermatology",
    },
    {
        imgsrc: "https://i.postimg.cc/NfRg3ZCJ/tre.jpg",
        title: "Tretinoin",
        indication: "This medication is a retinoid, prescribed for acne vulgaris and acute promyelocytic leukemia.  It slows or stops the growth of cancer cells in the body.",
        dosage: "PO- The recommended dose is 45 mg/m2/day administered as two evenly divided doses.Topical- 0.05% apply a thin layer of cream over the affected area.",
        sideEffects: "Headache, fever, skin dryness, bone pain, nausea/vomiting, rash, itching, increased sweating, visual disturbances, hair loss, skin changes and bone inflammation.",
        price: 295.00,
        countInStock : 500,
        category: "Dermatology",
    },


    // ------ Dermatology End ------- \\

    // ------ Diabetes ------- \\
    {
        imgsrc:
            "https://www.empr.com/wp-content/uploads/sites/7/2018/12/ac752944889a4c6494dae4f478ea8237-nesina_405478.jpg",
        title: "Alogliptin",
        indication:
            "Alogliptin is prescribed to reduce high blood sugar level in patients with type 2 diabetes along with diet control and exercise.It should not be used in treating diabetic ketoacidosis or type 1 diabetes.  ",
        dosage:
            "PO - The initial dose is based on patient’s condition. Maximum recommended dose is 25/2000mg.",
        sideEffects:
            "Upper respiratory tract infection, heart attack, throat inflammation, diarrhea, high blood pressure, headache, back pain and urinary tract infection.",
        price: 405,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://5.imimg.com/data5/ZJ/FV/VB/SELLER-104814248/alogliptin-500x500.jpg",
        title: "Alogliptin and Metformin",
        indication:
            "Alogliptin and Metformin combination is used along with diet and exercise to improve blood sugar control or to treat hyperglycemia in patients with type 2 diabetes.High blood sugar level can cause damage to the eyes, kidney, and nerves.This combination medication contains alogliptin, a dipeptidyl-peptidase-4 (DPP-4) inhibitor and metformin, a biguanide.",
        dosage: "(125mg/500mg)- Dose is based on patient’s condition.",
        sideEffects:
            "Lactic Acidosis and pancreatitis.Most Common: Upper respiratory tract infection, nasopharyngitis, diarrhea, hypertension, headache, back pain and urinary tract infection.",
        price: 500,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://www.empr.com/wp-content/uploads/sites/7/2018/12/5a26069609d944038725ae95e761a5f1-oseni_405485.jpg",
        title: "Alogliptin and Pioglitazone",
        indication:
            "Alogliptin and Pioglitazone combination is used to treat high blood sugar level in patients with type 2 diabetes along with diet control and exercise. This combination should not be used to treat type 1 diabetes.This combination medication contains pioglitazone, a thiazolidinedione agent and alogliptin, a DPP-4 inhibitor.",
        dosage:
            "Dose is based on patient’s condition. Maximum recommended dose is 25/45mg.",
        sideEffects:
            "Inflammation of throat and nasal passages, back pain and upper respiratory tract infection.",
        price: 450,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://5.imimg.com/data5/MR/OX/MY-18174683/sulisent-28canagliflozin-100mg-29-tablet-500x500.jpg",
        title: "Canagliflozin",
        indication:
            "This medication is an antidiabetic (sodium glucose co-transporter 2 (SGLT2) inhibitor), prescribed for type 2 diabetes mellitus along with diet and exercise. For patients with type 2 diabetes along with diabetic kidney disease, physicians should consider using an SGLT2 inhibitor when the eGFR is at or above 30, especially with albuminuria above 300 mg/g, to lower renal and CV risk as per A.D.A recommendations.",
        dosage: "PO- The recommended initial dose is 100 mg once daily.",
        sideEffects:
            "Female genital mycotic infections, urinary tract infection and increased urination.",
        price: 298,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKl6UBEBhkp0cUc7ciO3VVRoBjtAf7cA-QPOTggzDmit4AYegpA3mcl9haEtf6nfB5diw&usqp=CAU",
        title: "Diabinese",
        indication:
            "This medication is a sulfonylurea antidiabetic drug, prescribed for type 2 diabetes. This medication helps to keep blood sugar levels under control.",
        dosage:
            "PO- The recommended initial dose is 250mg/day. It may be adjusted based on patient’s condition.",
        sideEffects:
            "Body as a Whole : Low blood sugar, Disulfiram-like,Central Nervous System : Dizziness and headache, Gastrointestinal : Diarrhea, nausea, vomiting, loss of appetite and hunger, Liver : Jaundice, Skin : Itching and hives, Blood : Anemia and decrease in blood counts.",
        price: 345,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://www.prestoimages.net/store30/rd14324/14324_pd3794145_1_.jpg",
        title: "Colesevelam HCL",
        indication:
            "This medication is a bile acid sequestrant, prescribed for familial hypercholesterolemia and type 2 diabetes with other medications.",
        dosage:
            "For hypercholesterolemia- The recommended dose is one 3.75-gram packet once daily or one 1.875-gram packet twice daily.For Type 2 Diabetes- The recommended dose is 6 tablets once daily or 3 tablets twice daily.",
        sideEffects:
            "Headache, fatigue, increased level of liver enzyme, runny nose, vomiting, constipation, indigestion, difficulty in swallowinglow blood sugar, nausea and high blood pressure..",
        price: 400,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://emedz.net/blog/wp-content/uploads/2020/01/Steglatro-ertugliflozin-696x484.jpg",
        title: "Steglatro",
        indication:
            "Ertugliflozin tablet is a sodium glucose co-transporter 2 (SGLT2) inhibitor which is prescribed for adult patients with type 2 diabetes as an adjunct therapy to diet control and exercise with a focus to improve glycemic control.It is prescribed either as a monotherapy or in combination with metformin or sitagliptin.  ",
        dosage:
            "The recommended initial dose of ertugliflozin tablets is 5 mg to be taken once a day.The dose of ertugliflozin can be increased to 15 mg once daily to achieve adequate glycemic control",
        sideEffects:
            "Common: Frequent urination, low blood sugar level, genital fungal infections, Gastrointestinal: Nausea, pain in the stomach, vomiting, Cardiovascular: Low blood volume, low blood pressure, faster heartbeat, increased LDL-cholesterol level in blood, Nervous system: Confusion, dizziness, headache, irritability, weakness, Respiratory: Difficulty in breathing, nasopharyngitis, Kidney: Urinary tract infections (pyelonephritis, urosepsis or bladder infections), pain or burning sensation while passing urine, blood in urine, reduced kidney function, Others: Foot ulcers or sores, fever, pain or tenderness in the lower limbs, pain in the back, reduced weight, increased thirst",
        price: 500,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://5.imimg.com/data5/SELLER/Default/2021/2/KR/IZ/EH/123113767/byetta-10mcg-500x500.jpg",
        title: "Byetta",
        indication:
            "This medication is a incretin mimetic, prescribed for type 2 diabetes with diet and exercise, either alone or with other medications. For patients with chronic kidney disease who are at elevated risk for CV events, a glucagon-like peptide 1 receptor agonist may lower risk for albuminuria progression and/or CV events, according to new (2019)recommendations of The American Diabetes Association It works by stimulating the pancreas to secrete insulin in hyperglycemic condition.  ",
        dosage:
            "Adult- The initial dose is 5 mcg injected under the skin (subcutaneously) twice daily, 60 minutes before breakfast or dinner.",
        sideEffects:
            "Most Common: Nausea.Central Nervous System: Dizziness or lightheadedness, nervousness, mood changes, weakness, shakiness, confusion, epilepsy and loss of consciousness.Gastrointestinal: Extreme thirst, extreme hunger, stomach upset, vomiting, diarrhea and difficulty in swallowing. Skin: Rash, hives and itching. Allergic reactions: Swelling of the face, throat, tongue, lips, eyes, hands, feet, ankles, or lower legs and difficulty in breathing.",
        price: 395,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://5.imimg.com/data5/QY/WA/MY-29865653/glibenclamide-tablets-500x500.jpg",
        title: "Glibenclamide",
        indication:
            "TGlibenclamide is an oral hypoglycemic (glucose lowering) drug used to control blood sugar levels in patients with type 2 diabetes in addition to diet and exercise.It belongs to the chemical group of sulfonylureas",
        dosage:
            "The treatment is started with a low dose of 2.5 mg per day, and increased up to a maximum of 20 mg per day according to the blood glucose levels.",
        sideEffects:
            "Digestive tract: Nausea, vomiting, flatulence, abdominal fullness, diarrhea, constipation, heartburn, liver dysfunction, Skin: Rash, skin swelling, photosensitivity reactions (skin reactions following exposure to sunlight) including porphyria cutanea tarda (which is associated with an enzyme deficiency, Blood: Low blood counts, low blood glucose levels, low blood sodium levels, Others: Tiredness, weakness, fever, other allergic reactions, weight gain, joint or muscle pain.",
        price: 456,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://cpimg.tistatic.com/05683521/b/4/Glibenclamide-5-Mg-Metformin-500-Mg-Tablets.jpg",
        title: "Glibenclamide and Metformin",
        indication:
            "This medication contains sulfonylurea and biguanide antidiabetic combination, prescribed for type 2 diabetes.",
        dosage:
            "Adult: PO- Per tab contains glibenclamide 1.25 mg and metformin 250 mg. As initial therapy: Start with 1 tab 1-2 times/day. It may be increased if needed.",
        sideEffects:
            "Low blood sugar, upper respiratory tract infection, diarrhea, headache, nausea/vomiting, abdominal pain and dizziness.",
        price: 355,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://tajpharma.in/wp-content/uploads/cache/images/remote/i0-wp-com/Gliclazide-BP-80mg-tablets_Taj_Pharma_antidiabetic-1099925899.jpg",
        title: "Gliclazide",
        indication:
            "This medication is an oral hypoglycemic (anti-diabetic drug), prescribed for type 2 diabetes. It stimulates the pancreas, which helps in more insulin secretion.",
        dosage:
            "PO- Initially start with 160mgs daily in two divided doses. May go up to 320 mgs daily in two divided doses.",
        sideEffects:
            "GI disturbances, skin reaction, decrease in blood cell counts, jaundice, vomiting, diarrhea and stomach inflammation.",
        price: 505,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc:
            "https://tajgenerics.com/wp-content/uploads/cache/images/Glimepiride-Tablets-USP-4-mg-Taj-Pharma-3/Glimepiride-Tablets-USP-4-mg-Taj-Pharma-3-3850713814.jpg",
        title: "Glimepiride",
        indication:
            "This medication is a sulfonylurea antidiabetic agent, prescribed for type 2 diabetes. It works by causing the pancreas to produce insulin.",
        dosage:
            "Adult- PO- Initial- The recommended starting dose is 1-2 mg once daily, with food. Maximum: 2mg/day.",
        sideEffects:
            "Most Common : Low blood sugar, temporary visual impairment and GI disturbances. Miscellaneous : Dizziness, weakness, headache, nausea/vomiting, lightheadedness, confusion and irritability.",
        price: 500,
  
  countInStock : 500,      category: "Diabetes",
    },
    {
        imgsrc: "https://5.imimg.com/data5/CK/TL/MY-5656419/1-500x500.jpg",
        title: "Glipizide",
        indication:
            "This medication is a sulfonylurea antidiabetic agent, prescribed for type 2 diabetes (condition in which the body does not use insulin normally and therefore cannot control the amount of sugar in the blood), particularly in people whose diabetes cannot be controlled by diet alone. It increases the amount of insulin secretion and thus regulates the sugar level in the blood.",
        dosage:
            "PO: Initial-2.5 to 5 mg/day as a single dose may increase slowly. Doses greater than 15 mg may be given in 2 divided doses. Max: 40 mg/day.",
        sideEffects:
            "Low blood sugar. Heart: Increased risk of death due to heart problems. Central Nervous System: Dizziness and vertigo. Skin: Allergic skin reactions, inflammation of skin, itching, redness, hives, eruptions and photosensitivity.",
        price: 600,
  
  countInStock : 500,      category: "Diabetes",
    },

    // ------ Diabetes End------- \\
    // ------- Depression ------- \\

    {
        imgsrc: "https://i.postimg.cc/Z5Y1wQGy/Ademetionine.jpg",
        title: "Ademetionine",
        indication: "Ademetionine is used for treating chronic liver disease such as intrahepatic cholestasis.",
        dosage: "• Oral: 400-1600 mg per day",
        sideEffects: "Nervous system disorders: Headache, insomnia, dizziness, nervousness",
        price: 345,
  
  countInStock : 500,      category: "Depression"
    },

    {
        imgsrc: "https://i.postimg.cc/KYkpVhJ4/Alprazolam.jpg",
        title: "Alprazolam",
        indication: "This medication is a benzodiazepine, prescribed for anxiety and panic disorders.",
        dosage: "The starting dose for treating anxiety is 0.25-0.5 mg, 3 times daily using immediate release tablets.",
        sideEffects: "Gastrointestinal : Dry mouth, constipation, diarrhea, nausea/vomiting and increased salivation.",
        price: 765,
  
  countInStock : 500,      category: "Depression"
    },

    {
        imgsrc: "https://i.postimg.cc/TYtk33sp/Amitriptyline.jpg",
        title: "Amitriptyline",
        indication: "This medication is a tricyclic antidepressant, prescribed for depression.",
        dosage: "Adult: PO- Depression- Initial:50-75 mg/day; up to 150 mg/day if needed.",
        sideEffects: "Allergic : Skin rash, hives, photosensitivity, swelling of the face and tongue.",
        price: 987,
  
  countInStock : 500,      category: "Depression"
    },

    {
        imgsrc: "https://i.postimg.cc/xdzg5y1z/Amoxapine.jpg",
        title: "Amoxapine",
        indication: "This medication is a tricyclic antidepressant, prescribed for depression.",
        dosage: "Adult- Initial- The recommended dose is 50 mg two or three times daily.",
        sideEffects: "Miscellaneous : Dizziness, headache, fatigue, weakness, excessive appetite and increased perspiration.",
        price: 243,
  
  countInStock : 500,      category: "Depression"
    },

    {
        imgsrc: "https://i.postimg.cc/wT4VdbtN/Aripiprazole.jpg",
        title: "Aripiprazole",
        indication: "This medication is an atypical antipsychotic and antidepressant, prescribed for schizophrenia and depression.",
        dosage: "Adult: Initial dose: 10 to 15 mg once daily.",
        sideEffects: "Central Nervous System: Dizziness, drowsiness, headache.",
        price: 500,
  
  countInStock : 500,      category: "Depression"
    },

    {
        imgsrc: "https://i.postimg.cc/QM1k18fg/Armodafinil.jpg",
        title: "Armodafinil",
        indication: "This medication is a stimulant, prescribed for excessive sleepiness caused by obstructive sleep apnea",
        dosage: "OSA/Nacrolepsy- Oral- The recommended dose is 150 mg or 250 mg given as a single dose in the morning.",
        sideEffects: "General : Fatigue, thirst, influenza-like illness, pain and fever.",
        price: 798,
  
  countInStock : 500,      category: "Depression"
    },

    {
        imgsrc: "https://i.postimg.cc/RVh7GQPZ/Atomoxetine.jpg",
        title: "Atomoxetine",
        indication: "This medication is a selective norepinephrine reuptake inhibitor (SNRI), prescribed for Attention deficit hyperactivity disorder (ADHD).",
        dosage: "Dosing of children and adolescents up to 70 kg body weight",
        sideEffects: "Gastrointestinal : Liver disease, abdominal pain, vomiting and nausea.",
        price: 200,
  
  countInStock : 500,      category: "Depression"
    },
    // ------- Depression End ------- \\
    // ------- Dental  ------- \\
    {
        imgsrc: "https://i.postimg.cc/nrDHcWFL/Chlorhexidine.jpg",
        title: "Chlorhexidine",
        indication: "This medication is a chemical antiseptic, prescribed for gingivitis, cleansing skin and wound areas.",
        dosage: "As 0.2% solution: Rinse with 10 ml for 1 min 2-3 times/day.",
        sideEffects: "Skin sensitivity, irritation of eye, mucosal irritation and staining of the teeth and tongue.",
        price: 300,
  
  countInStock : 500,      category: "Dental"
    },

    {
        imgsrc: "https://i.postimg.cc/W4ztcXkd/Feracrylum.jpg",
        title: "Feracrylum",
        indication: "Feracrylum is used as a hemostatic (to stop bleeding) and an anti-septic for the management of post-operative wounds, cuts.",
        dosage: "Feracrylum is available as a 1% sterile solution (1% w/v feracrylum), as 50 and 15 gm gel tubes (1% w/w feracrylum) and tulle ( 3% w/v feracrylum).",
        sideEffects: "Gastrointestinal: Nausea, stomach pain.",
        price: 620,
  
  countInStock : 500,      category: "Dental"
    },

    {
        imgsrc: "https://i.postimg.cc/FH7Q9qTX/Gensparin.jpg",
        title: "Gensparin",
        indication: "Gensparin prevents the formation of blood clots and is hence used for the treatment of thrombolytic disorders.",
        dosage: "The recommended dose of the drug is 20mg/0.2ml injection.",
        sideEffects: " Skin: Rashes, pale skin, clots at the puncture site.",
        price: 854,
  
  countInStock : 500,      category: "Dental"
    },

    {
        imgsrc: "https://i.postimg.cc/3r1M276H/Multivitamin.jpg",
        title: "Multivitamin",
        indication: "This medication is an essential nutrient, prescribed for patients with vitamin deficiency.  Normally provided in combination with dietary minerals.",
        dosage: "Dose is based on patient’s condition.",
        sideEffects: "Slight nausea and unpleasant taste.",
        price: 790,
  
  countInStock : 500,      category: "Dental"
    },
    // ------- Dental End ------- \\

    // ----- Fracture ------ \\
    {
        imgsrc: "https://i.postimg.cc/MGStsfM3/Abaloparatide.jpg",
        title: "Abaloparatide",
        indication: "Abaloparatide is prescribed to treat osteoporosis in postmenopausal women who are at a high risk for fracture.",
        dosage: " The recommended adult dose is 80 mcg to be given subcutaneously (just under the skin) once a day",
        sideEffects: "•  Gastrointestinal: Nausea, pain in upper abdominal area, constipation, upset stomach.",
        price: 350,
  
  countInStock : 500,      category: "Fracture"
    },

    {
        imgsrc: "https://i.postimg.cc/C5XsbRpN/Aspirin-and-Oxycodone.jpg",
        title: "Aspirin and Oxycodone ",
        indication: "This combination medication is used to relieve moderate to severe pain.",
        dosage: "The usual dosage is one tablet every 6 hours as needed for pain.",
        sideEffects: " Most common : Lightheadedness, dizziness, drowsiness or sedation, nausea and vomiting.",
        price: 705,
  
  countInStock : 500,      category: "Fracture"
    },


    {
        imgsrc: "https://i.postimg.cc/g0syNSPr/Metamizole.jpg",
        title: "Metamizole",
        indication: "Metamizole is a painkiller used for the treatment of fever, headache, toothache, postoperative pain and other painful conditions.",
        dosage: "The recommended oral adult dose for metamizole is 500 mg 3-4 times up to a maximum dose of 4000 mg/day.",
        sideEffects: "Skin: Severe skin reactions like toxic epidermal necrolysis",
        price: 432,
  
  countInStock : 500,      category: "Fracture"
    },

    // ----- Fracture End ----- \\
    // ------- Women Care ----- \\
    {
        imgsrc: "https://newassets.apollo247.com/pub/media/catalog/product/s/u/sus0048.jpg",
        title: "Progesterone",
        indication: "This medication is a hormone, prescribed for replacement therapy in women who have passed menopause. It is also used to prevent uterine cancer.",
        dosage: "Adult- The recommended dose range is 25 to 400 mg/day.",
        sideEffects: "Gastrointestinal : Abdominal pain, nausea, vomiting, abdominal distension and constipation. General : Fatigue. Central Nervous System : Headache.urinary tract infections.",
        price: 285,
  
  countInStock : 500,      category: "Women's Care"
    },

    {
        imgsrc: "https://i.postimg.cc/rpZgNVWK/de.jpg",
        title: "Dehydroepiandrosterone",
        indication: "Adrenal insufficiency, where the adrenal gland does not produce enough hormones, To improve aging skin, Depression",
        dosage: "The dose varies according to the condition.The usual recommended oral dose for dehydroepiandrosterone is 50 to 75 mg/day. Higher doses of 50 mg three times a day have been used for adrenal insufficiency.",
        sideEffects: "Changes in blood pressure, reduced HDL cholesterol levels",
        price: 420,
  
  countInStock : 500,      category: "Women's Care"
    },
    {
        imgsrc: "https://i.postimg.cc/7h3gdwC1/fen.jpg",
        title: "Eicosapentaenoic acid",
        indication: "Eicosapentaenoic acid (EPA) is an omega-3-fatty acid. It is used to reduce the levels of triglycerides and prevent and treat heart-related conditions like coronary heart disease.It is also used for the treatment of other conditions like schizophrenia, depression, menopausal or rheumatoid arthritis symptoms, cancers and borderline personality disorder.  ",
        dosage: "The usual recommended dose is between 0.5 to 1 mg.However, the dose depends on the underlying condition.EPA is present in fish oil capsules along with docosapentanoic acid.",
        sideEffects: "Gastrointestinal: Nausea, diarrhea, heartburn, belching, Skin: Skin rash, itching, Others: Nosebleed, or joint, back pain and muscle pain",
        price: 400,
  
  countInStock : 500,      category: "Women's Care"
    },
    {
        imgsrc: "https://i.postimg.cc/8zB0Mgt6/es.jpg",
        title: "Estrogen",
        indication: "This medication is prescribed for severe vasomotor symptoms due to menopause, ovarian failure, osteoporosis, uterine bleeding, delayed puberty and prostate cancer.",
        dosage: "Adult- IV/IM/PO: The recommended dose range is 0.3 to 25mg.",
        sideEffects: "Gastrointestinal : Stomach upset, vomiting, heartburn, constipation, diarrhea and gas. Central Nervous System : Nervousness, depression, dizziness, tight muscles, weakness, tingling and movement disorders. Metabolic : Weight gain or loss and loss of appetite. Skin : Hair loss, unwanted hair growth and darkening of the skin, Musculoskeletal : Leg cramps and joint pain. Allergic Reactions : Rash, blisters, hives, itching, swelling of the eyes, face, tongue, throat, hands, arms, feet, ankles or lower legs, hoarseness, difficulty in breathing or swallowing. Miscellaneous : Sore throat, fever, chills, cough and other signs of infection.",
        price: 320,
  
  countInStock : 500,      category: "Women's Care"
    },
    {
        imgsrc: "https://i.postimg.cc/9QRGHdqF/est.jpg",
        title: "Estropipate",
        indication: "This medication is a crystalline form of estrogen, prescribed for symptoms of menopause, osteoporosis.",
        dosage: "PO- The recommended dose is 0.75-9 mg orally daily. Administration usually is cycled; 21 days on and 7-10 days off.",
        sideEffects: "Heart: Blood clot in lungs and blood vessels, heart attack, stroke and increase in blood pressure. Gastrointestinal: Nausea, vomiting, abdominal cramps, bloating, gallbladder disease and inflammation of pancreas. Liver: Jaundice and enlargement of liver tumor.Skin: Dark skin, acne, redness, bleeding eruption, loss of scalp hair, excessive hair growth over the body, itching and rash.",
        price: 545,
  
  countInStock : 500,      category: "Women's Care"
    },
    {
        imgsrc: "https://i.postimg.cc/sDBBMVfT/fem.png",
        title: "Ethiny- Estradiol- Norethindrone",
        indication: "This combination medication contains estrogen and progestin, prescribed for menopausal symptoms such as hot flashes, night sweats and others. It prevents egg release from ovaries.",
        dosage: "PO- A single tablet to be taken orally once daily.",
        sideEffects: "Body As A Whole : Headache, back pain, viral infection. Gastrointestinal : Nausea, vomiting, abdominal pain, indigestion, diarrhea. Musculoskeletal : Joint and muscle pain. Central Nervous System : Nervousness, depression. Respiratory : Nose inflammation, inflammation of the sinuses.urinary tract infection",
        price: 305,
  
  countInStock : 500,      category: "Women's Care"
    },


    // ------- Women Care End ----- \\
];

module.exports = products;
