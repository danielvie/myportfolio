b: build

c: cp

cp:
	cp cv/resume.pdf public/cv-daniel-vieira.pdf
	cp cv/resume.pdf cv/cv-daniel-vieira.pdf

clean:
	rm cv/components/*.pdf

build:
	typst compile cv/resume.typ