CREATE DATABASE IF NOT EXISTS `bannerdisplay` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bannerdisplay`;

CREATE TABLE banners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    color VARCHAR(255) NULL,
    expirationTime DATE NOT NULL,
    link VARCHAR(255) NULL,
    linkTitle VARCHAR(255) NULL,
    showBanner BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO banners (title, description, color, expirationTime, link, linkTitle, showBanner) VALUES
('Banner 1', 'This is the first banner', 'red', '2021-12-31', 'https://www.google.com', 'Google', TRUE),
('Banner 2', 'This is the second banner', 'blue', '2021-12-31', 'https://www.facebook.com', 'Facebook', TRUE),
('Banner 3', 'This is the third banner', 'green', '2021-12-31', 'https://www.twitter.com', 'Twitter', TRUE);