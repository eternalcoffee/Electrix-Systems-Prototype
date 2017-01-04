function initData() {
  jimData.variables["Message"] = "0";
  jimData.variables["Report"] = "0";
  jimData.variables["Search"] = "0";
  jimData.variables["Settings"] = "0";
  jimData.variables["Notification"] = "0";
  jimData.variables["OFF"] = "0";
  jimData.variables["ON"] = "0";
  jimData.datamasters["Contacts"] = [
    {
      "id": 1,
      "datamaster": "Contacts",
      "userdata": {
        "User": "Danny Pej",
        "Subject": "Material Design",
        "Body": "There is the new Material Design Style, take a look.",
        "Read": "That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "15m",
        "Picture": "./images/34fd2e5c-8e20-40a7-b011-ee5bc57bfe2b.png",
        "Star": "./images/136d8b1c-de62-415f-b332-57ced3c1635e.png"
      }
    },
    {
      "id": 2,
      "datamaster": "Contacts",
      "userdata": {
        "User": "Imma Mustard",
        "Subject": "Take a look",
        "Body": "There is a new design. Check it the layouts and tell me something.",
        "Read": "That is awesome!! I love this design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "1:39pm",
        "Picture": "./images/74ae08d3-f9d1-49db-90f4-30284ab37dd5.png",
        "Star": "./images/ea170dd6-4441-4a5a-b66c-86a6be5ce03c.png"
      }
    },
    {
      "id": 3,
      "datamaster": "Contacts",
      "userdata": {
        "User": "Milena Intelisan",
        "Subject": "Weekend meeting?",
        "Body": "Can you meet this weekend with us at the restaurant?",
        "Read": "Of course, call me on friday to fix the hour, please. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "3h",
        "Picture": "./images/ad2862d4-9971-4add-b48e-47c26d965826.png",
        "Star": "./images/81bda5ad-9cf8-49d1-a1b6-b74929161b54.png"
      }
    },
    {
      "id": 4,
      "datamaster": "Contacts",
      "userdata": {
        "User": "Montse Hall",
        "Subject": "Important news",
        "Body": "That is awesome!! Please read this...",
        "Read": "Great news!, congratulations!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Nov 03",
        "Picture": "./images/58f46de8-a05c-4459-8976-7c9f2f44c407.png",
        "Star": "./images/4b44c3ab-c9f0-4673-9ba7-00ee57d77c24.png"
      }
    },
    {
      "id": 5,
      "datamaster": "Contacts",
      "userdata": {
        "User": "Xavier Comes",
        "Subject": "New route!!",
        "Body": "I found this interesting route, let's ride this sunday.",
        "Read": "Great route. This weekend lests ride! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Oct 26",
        "Picture": "./images/7ef9c7d3-9e4c-42f3-bfee-74440ecde453.png",
        "Star": "./images/63049f49-3565-45c6-946e-3903e3a92110.png"
      }
    },
    {
      "id": 6,
      "datamaster": "Contacts",
      "userdata": {
        "User": "Imma Gari",
        "Subject": "Hello there!!",
        "Body": "It's been a long time since we last met",
        "Read": "Can you give me some time to think about this and can we talk tomorrow? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Oct 27",
        "Picture": "./images/f2ec385f-e967-47c1-8915-2dc09efe078e.png",
        "Star": "./images/838bb60e-1a5b-48c2-8065-39808bcd9c72.png"
      }
    },
    {
      "id": 7,
      "datamaster": "Contacts",
      "userdata": {
        "User": "Albert Lives",
        "Subject": "What's for dinner?",
        "Body": "If you need some inspiration for your own dinner tonight, call me.",
        "Read": "This is  a surprise!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis magna, scelerisque vitae blandit ac, vulputate mi. Etiam nec mauris sem. Praesent id rhoncus elit. Nam id aliquam enim, ut faucibus ante. Integer sit amet efficitur lorem. Cras luctus dui sed tortor elementum blandit.",
        "Date": "Oct 29",
        "Picture": "./images/0eff0049-ee77-4ee1-964c-d6a6751b9c09.png",
        "Star": "./images/c5297b66-1a33-4a6a-970b-555c2324cb96.png"
      }
    }
  ];

  jimData.isInitialized = true;
}