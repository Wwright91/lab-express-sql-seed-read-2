\c tuner;

INSERT INTO songs (name, artist, album, time, is_favorite) 
VALUES 
('Bohemian Rhapsody', 'Queen', 'A Night At The Opera', '5:55', true),
('Valentine', 'YK Osiris', 'The Golden Child', '3:26', false);

INSERT INTO playlists (name, description, image, genre, is_private)
VALUES
('For Commute', 'A playlist for surviving the MTA.', 'https://banner2.cleanpng.com/20190419/itt/kisspng-portable-network-graphics-computer-icons-clip-art-ocm-epk-one-church-5cba0363cac613.0848359515556944358306.jpg', 'rap', true), 
('Jorge''s Workouts', 'A playlist for working out.', 'https://banner2.cleanpng.com/20190419/itt/kisspng-portable-network-graphics-computer-icons-clip-art-ocm-epk-one-church-5cba0363cac613.0848359515556944358306.jpg', 'mix', false), 
('For Falling Asleep', 'A playlist to help you fall asleep.', 'https://banner2.cleanpng.com/20190419/itt/kisspng-portable-network-graphics-computer-icons-clip-art-ocm-epk-one-church-5cba0363cac613.0848359515556944358306.jpg', 'blues', false);