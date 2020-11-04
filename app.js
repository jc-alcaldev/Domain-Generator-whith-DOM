let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = [".com", ".net", ".us", ".io"];

let domainGenerator = [];

for (let a = 0; a < pronoun.length; a++)
    for (let b = 0; b < adj.length; b++) 
        for (let c = 0; c < noun.length; c++)
            for (let d = 0; d < extension.length; d++)
                domainGenerator.push(pronoun[a]+adj[b]+noun[c]+extension[d]);

    
console.log(domainGenerator);

let divDomain = document.querySelector(".domain_generator");

for (let index = 0; index < domainGenerator.length; index++) {
    let node = document.createElement('p');
    let text = document.createTextNode(domainGenerator[index]);
    node.appendChild(text);
    divDomain.appendChild(node);
}