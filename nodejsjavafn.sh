echo "Hello from nodejsjavafn.sh!"

function handler () {
    EVENT_DATA=$1

    RESPONSE="{\"statusCode\": 200, \"body\": \"Hello from Lambda!\"}"
    echo $RESPONSE
}