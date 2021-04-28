javac Handler.java -cp ./../aws-lambda-java-core-1.2.1.jar;./../openapi-generator-cli-5.1.0.jar
mkdir .\\handler
copy Handler.class .\\handler
copy .\\..\\openapi-generator-cli-5.1.0.jar .\\handler
jar -cMf Handler.zip handler
@REM jar -cvf Handler.jar handler/Handler.class