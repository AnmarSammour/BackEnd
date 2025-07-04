
# First App _ Person Manager CLI
<h3>A Node.js command-line application for managing person data</h3>

## 📋 Features
- ✅ Add up to 10 persons with unique IDs  
- 👀 View all persons or specific person details  
- 🗑️ Delete single person or all records  
- 📊 View full name (first + last) and city for each person  
- 🔒 Data validation to prevent duplicates  

## 🏗️ Project Structure
```
person-manager/
├── src/
│   ├── app.js
│   ├── commands/
│   │   ├── add.js
│   │   ├── delete.js
│   │   ├── list.js
│   │   └── read.js
│   ├── models/
│   │   └── person.js
│   ├── utils/
│   │   └── fileUtils.js
│   └── data/
│       └── persons.json
├── package.json
└── README.md
```
## 💻 Usage

### Add a person
```bash
node src/app.js add --id 1 --fname Anmar --lname Sammour --age 24--city AlBirah
```

### List persons
```bash
# Simple view (name + city)
node src/app.js list --simple

# Detailed view
node src/app.js list
```

### View specific person
```bash
node src/app.js read --id 1
```

### Delete data
```bash
# Delete specific person
node src/app.js delete --id 1

# Delete all persons
node src/app.js delete --all
```
## 
