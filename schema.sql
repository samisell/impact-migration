-- Impact Migration Database Schema Representation
-- Note: Appwrite uses a document-based database. This SQL file is a 
-- conceptual representation of the collections and their attributes.

-- Applications Collection (leads)
CREATE TABLE applications (
    $id VARCHAR(36) PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    preferredCountry VARCHAR(100) NOT NULL,
    courseOfInterest VARCHAR(255) NOT NULL,
    educationLevel VARCHAR(100) NOT NULL,
    message TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Collection (messages)
CREATE TABLE contact_messages (
    $id VARCHAR(36) PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
