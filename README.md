kevoree-compare
===============

node.js command-line app to use KMF Compare commands on Kevoree models

## Installation

```sh
npm i -g kevoree-compare
```

## Usage

```sh
kevoree-compare merge /tmp/modelA.json /tmp/modelB.json
```

`merge` is a command. You can do **merge**, **diff** and **inter**  

## Help

```
  Usage: kevoree-compare <cmd> <path/to/modelA.json> <path/to/modelB.json> [options]

  Commands:

    merge <path/to/modelA.json> <path/to/modelB.json>
       Output a model which is the merge of modelA and B
    
    inter <path/to/modelA.json> <path/to/modelB.json>
       Output a model which is the intersection between modelA and B
    
    diff <path/to/modelA.json> <path/to/modelB.json>
       Output a model which is the difference between modelA and B
    

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
