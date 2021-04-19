====
	id: 5
	type: "utils/prgm_init"
	pos: (20, 100)
	title: "Program Start"
	----
	out: "next", program_flow, undefined
	----
	conn: 0 ---> 4, 0
====

====
	id: 0
	type: "types/nombre"
	pos: (20, 200)
	title: "Premier nombre"
	value: 5
	----
	out: "value", number, undefined
	----
	conn: 0 ---> 2, 0
====

====
	id: 1
	type: "types/nombre"
	pos: (20, 350)
	title: "Deuxième nombre"
	value: 3
	----
	out: "value", number, undefined
	----
	conn: 0 ---> 2, 1
====

====
	id: 2
	type: "maths/addition"
	pos: (280, 275)
	title: "Addition"
	----
	in: "A", number, 2
	in: "B", number, 3
	out: "A+B", number, undefined
	----
	conn: 0 ---> 3, 0
====

====
	id: 3
	type: "utils/to_string"
	pos: (450, 280)
	title: "To String"
	----
	in: "in", anything, 4
	out: "out", string, undefined
	----
	conn: 0 ---> 4, 1
====

====
	id: 4
	type: "utils/print"
	pos: (620, 100)
	title: "Print"
	----
	in: "prev", program_flow, 1
	in: "message", string, 5
	out: "next", program_flow, undefined
====