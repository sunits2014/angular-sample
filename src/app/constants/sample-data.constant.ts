export class SampleData {
    static readonly sampleArray = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ]

    static readonly sampleObject = {
        "id": "0001",
        "cake": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "topic":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    }

    static readonly User = {
        name: 'John Doe',
        location: 'Bangalore',
        company: 'ABC Info',
        designation: 'Principal Engineer',
        tenure: '8 years'
    }
}