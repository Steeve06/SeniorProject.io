function selectFile(pdfFileName) {
    // Set the source of the iframe to the selected PDF file
    document.getElementById('pdfViewer').src = pdfFileName;
}



function handleFile() {
    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;

    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Handle the PDF content here, you can use a PDF library for more advanced features
            const pdfContent = e.target.result;
            console.log('PDF Content:', pdfContent);
        };
        reader.readAsDataURL(files[0]);
    }
}

// You can dynamically create and add profile cards here

// Example:
//const profileContainer = document.getElementById('profile-container');

for (let i = 1; i <= 4; i++) {
    const profileCard = document.createElement('div');
    profileCard.className = 'profile-card';
    profileCard.textContent = `Profile ${i}`;
    profileContainer.appendChild(profileCard);
}
