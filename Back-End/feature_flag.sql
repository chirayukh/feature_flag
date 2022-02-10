CREATE SEQUENCE general_feature_sequence;

Create table general_feature (
general_feature_id bigint PRIMARY KEY DEFAULT nextval('general_feature_sequence'::regclass),
general_feature_name text NOT NULL,
created_date timestamp without time zone
);

CREATE SEQUENCE settings_feature_sequence;

Create table settings_feature (
settings_feature_id bigint PRIMARY KEY DEFAULT nextval('settings_feature_sequence'::regclass),
settings_feature_name text NOT NULL,
created_date timestamp without time zone
);

CREATE SEQUENCE alerts_feature_sequence;

Create table alerts_feature (
alerts_feature_id bigint PRIMARY KEY DEFAULT nextval('alerts_feature_sequence'::regclass),
alerts_feature_name text NOT NULL,
created_date timestamp without time zone
);

insert into general_feature (general_feature_name,created_date) values 
('CASE MANAGEMENT', current_date), 
('MAP TIMELINE' , current_date),
('VIEWS AND BRIEFING', current_date), 
('NOTIFICATIONS', current_date),
('MASS COMMUNICATIONS', current_date),
('TRAFFIC CAMERAS', current_date);

insert into settings_feature (settings_feature_name,created_date) values 
('AUDIT LOG', current_date), 
('USERS' , current_date);

insert into alerts_feature (alerts_feature_name,created_date) values 
('ALERT MANAGER', current_date), 
('ALERT RULES' , current_date);