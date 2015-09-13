# Example: hello-world

## Usage:

### Run with wavelet installed

#### 1. install wavelet
`````sh
npm install wavelet -g
`````

#### 2. clone the example
`````sh
git clone https://github.com/fxwavelet/examples.git
`````

#### 3. install dependencies and plugins
`````sh
cd exampls/hello-world
wavelet install
`````

#### 4. run your web server
`````sh
wavelet start --port 80 --disableRED
`````
Remove --disableRED option, if you would like to access visual tool (http://localhost/editor)

#### 5. check the result
visit: http://localhost


### Run with wavelet source code

#### 1. clone wavelet
`````sh
git clone https://github.com/fxwavelet/wavelet.git
cd wavelet 
npm install
`````

#### 2. clone the example
`````sh
git clone https://github.com/fxwavelet/examples.git
`````

You should have a folder like this:
`````sh
--| your workspace
  --| wavelet
    --| wavelet.js
      | ... other files
  --| examples
    --| hello-world  
      | ... other examples
`````


#### 3. install dependencies and plugins
`````sh
cd exampls/hello-world
node ../wavelet/wavelet.js install
`````

#### 4. run your web server
`````sh
node ../wavelet/wavelet.js start --port 80 --disableRED
`````
Remove --disableRED option, if you would like to access visual tool (http://localhost/editor)

#### 5. check the result
visit: http://localhost

