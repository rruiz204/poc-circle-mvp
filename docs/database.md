#### Circle ER Diagram
Note: Paste in `dbdiagram.io`

```
Table Users {
  id serial [pk]
  name varchar [not null]
  email varchar [not null]
  password varchar [not null]
  created_at datetime [not null]
  updated_at datetime [not null]
}

Table Roles {
  id serial [pk]
  name varchar [not null]
  created_at datetime [not null]
  updated_at datetime [not null]
}

Table RoleScopes {
  role_id integer [ref: > Roles.id]
  scope_id integer [ref: > Scopes.id]
  created_at datetime [not null]
  updated_at datetime [not null]
}

Table Scopes {
  id serial [pk]
  name varchar [not null]
  created_at datetime [not null]
  updated_at datetime [not null]
}

Table Circles {
  id serial [pk]
  name varchar [not null]
  description varchar [not null]
  created_at datetime [not null]
  updated_at datetime [not null]
}

Table Members {
  user_id integer [ref: > Users.id]
  role_id integer [ref: > Roles.id]
  scopes_id integer [ref: > Scopes.id]
  created_at datetime [not null]
  updated_at datetime [not null]
}

Table Goals {
  id serial [pk]
  circle_id integer
  title varchar [not null]
  due_date datetime [not null]
  description varchar [not null]
  created_at datetime [not null]
  updated_at datetime [not null]
}

Table Messages {
  id serial [pk]
  content varchar [not null]
  author_id integer [ref: > Users.id]
  circle_id integer [ref: > Circles.id]
  created_at datetime [not null]
  updated_at datetime [not null]
}
```