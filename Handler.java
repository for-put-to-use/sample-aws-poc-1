package handler;

import java.util.Map;
import java.lang.List;
import java.lang.ArrayList;
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

    String cmd = "notepad.exe";

    List<String> list = new ArrayList<String>();
    list.add(cmd);

    // create the process
    ProcessBuilder build = new ProcessBuilder(list);

    build.command();

    return response;
  }
}

// public class Handler implements RequestHandler<S3Event, String>{
//   @Override
//   public String handleRequest(S3Event input, Context context)
//   {
//     String response = new String("200 OK");
//     System.out.println("Inside Java Handler");
//     System.out.println("input: "+S3Event);
//     return response;
//   }
// }