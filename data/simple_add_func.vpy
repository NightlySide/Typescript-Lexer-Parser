====
    id: 0
    type: const_number
    ----
    out: "value", number, 5
    ----
    conn: 0 ---> 2, 0
==== 

====
    id: 1
    type: const_number
    ----
    out: "value", number, 3
    ----
    conn: 0 ---> 2, 1
====

====
    id: 2
    type: add
    ----
    in: "a", number, 0
    in: "b", number, 0
    out: "a+b", number, $value
    ----
    conn: 0 ---> 3, 0
====

====
    id: 3
    type: nb_to_string
    ----
    in: "number", number, 0
    out: "string", string, $value
    ----
    conn: 0 ---> 4, 0
====

====
    id: 4
    type: print
    ----
    in: "message", string
====