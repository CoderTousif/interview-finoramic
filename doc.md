Problem Statement

Most of the programming languages have tools to manually define project dependencies and simple command line interfaces to download those dependencies. For example Java have Maven and NodeJs have npm. In Java we define pom.xml and in npm we use package.json. You need to build a tool to automatically download python packages.

Input:
A json file containing different dependencies

{
Dependencies = {
beautifulsoup4==4.4.1,
boto==2.48.0,
bz2file==0.98,
certifi==2017.7.27.1,
chardet==3.0.4,
gensim==2.3.0,
html5lib==0.999,
idna==2.5,
nltk==3.2.4,
numpy==1.13.1,
pexpect==4.0.1,
pip==9.0.1,
ptyprocess==0.5,
pyxdg==0.25,
reportlab==3.3.0,
requests==2.18.3,
scipy==0.19.1,
setuptools==20.7.0,
six==1.10.0,
smart-open==1.5.3,
textblob==0.12.0,
twitter==1.17.1,
urllib3==1.22,
},
}

Output:
A script in any language to download and install all these dependencies.
If case all are successfully installed print success
If some failed then print list of all failed packages, one of each in separate line.

Note: You can use PIP or any other command line tool to install python packages

Handle cases like:
When one library fail to download then we process shall continue.
