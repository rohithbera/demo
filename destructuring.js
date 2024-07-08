let data = "javascript";

        let [a1, a2, a3, a4, a5] = data;

        console.log(a2);


        const electronics = ["Aurdino", "gas sensor", "ph sensor", "Raspber"]

        // let [data1, data2] = electronics;
        let [data1,,, data2] = electronics;

        console.log(data1+" "+data2);

            
        const bike = ["TVS", "Honda", "KTM", "jawa"];

        const {[0]:bike1, [1]:bike2} = bike;

        console.log(bike1+" "+bike2);


        const num = [10, 20, 30, 40, 50, 60, 70, 80];

        cost [a1,b, ...rest] = num;

        console.log("a is" + a1, "b is" + "the rest is"+ rest);


        const code = new map ([
            ["java", 30000],
            ["javascript", 10000],
            ["datascience-python", 35000]
        ]);

        let sap = "";
        for(cunst [Key, values] of code) {
            sap +=" "+key+ "is" + values;

        }

        console.log(sap);


        //swapping 

        let course1 = "FSD";
        let course2 = "DADS";

        [course1, course2] = [course2, course1];
         console.log(course1+" "+course2);
        
         
        <C</CATELOG>

        