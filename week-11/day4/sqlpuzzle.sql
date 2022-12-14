SELECT COUNT(*) 
FROM FirstTab --4
AS ft WHERE ft.id NOT IN --WHERE ID NOT IN
( SELECT id FROM SecondTab WHERE id IS NULL) --NULL
--count
--0

SELECT COUNT(*) 
FROM FirstTab --4
AS ft WHERE ft.id NOT IN --WHERE ID NOT IN
( SELECT id FROM SecondTab WHERE id = 5) --5
--count
--2

 SELECT *
FROM FirstTab --4
AS ft WHERE ft.id NOT IN 
( SELECT id FROM SecondTab WHERE id IS NULL) --NULL,5
--count
--0

SELECT *
FROM FirstTab --4
AS ft WHERE ft.id NOT IN 
( SELECT id FROM SecondTab WHERE id IS NOT NULL )

--count
--2