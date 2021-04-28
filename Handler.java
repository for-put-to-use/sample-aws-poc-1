package handler;

import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.lang.*;


import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
// import com.amazonaws.services.lambda.runtime.events.S3Event;

// import com.amazonaws.services.s3.event.S3EventNotification.S3EventNotificationRecord;

public class Handler implements RequestHandler<Map<String, Object>, String>{
  @Override
  public String handleRequest(Map<String, Object> input, Context context)
  {
    String response = new String("200 OK");
    System.out.println("Inside Java Handler");

    String cmd = "java -jar openapi-generator-cli-5.1.0.jar generate -i ./swagger.json -g java -o ./client";

    List<String> list = new ArrayList<String>();
    list.add(cmd);

    // create the process
    ProcessBuilder build = new ProcessBuilder(list);

    System.out.println("output: "+build.command());

    return response;
  }
}