CREATE TABLE GALLERY (
	id SERIAL PRIMARY KEY,
	path varchar(300),
	description text,
	likes int
);


INSERT INTO "gallery" (path,description,likes)
VALUES ('images/aditya-joshi-TkCeMNeXRpo-unsplash.jpg',
'Photo of a Harley Davidson clutch chamber.',
'0'
);
INSERT INTO "gallery" (path,description,likes)
VALUES ('images/aditya-joshi-K7x1dDOOpwQ-unsplash.jpg',
'Photo of a Harley Davidson on residential street.',
'0'
);
INSERT INTO "gallery" (path,description,likes)
VALUES ('images/ed-pirnak-sdtGumPKtAQ-unsplash.jpg',
'Photo of a Harley Davidson in a uptown setting.',
'0'
);
INSERT INTO "gallery" (path,description,likes)
VALUES ('images/harley-davidson-wxSb4-Lxt3Y-unsplash.jpg',
'Photo of a Harley Fatboy Lo in the country side.',
'0'
);
INSERT INTO "gallery" (path,description,likes)
VALUES ('images/harley-davidson-yhW0qm86dOo-unsplash.jpg',
'Photo of a beautiful wheel.',
'0'
);
INSERT INTO "gallery" (path,description,likes)
VALUES ('images/revolt-MCRCX_b3l-s-unsplash.jpg',
'Photo of a Harley Fatboy Lo in a garage setting.',
'0'
);

